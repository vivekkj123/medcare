import { PrismaClient } from '@prisma/client'
import { vault , audit , PangeaErrors } from '../pangeaConfig.mjs';
const prisma = new PrismaClient()

const userController = {
  getUsers: (req, res , next) => {
    try {
      res.status(200).json({ message: 'Users retrieved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  registerUsers: async (req, res) => {
    try {
      const {
        email,
        id,
        firstName,
        lastName,
        phoneNumber,
        profileImg,
        dateOfBirth,
        bio,
        password ,
        address, 
      } = req.body;
       await vault.jwkGet("pvi_uu5j3wsra3bkdslpvutk5vkikempyxqq");
          const payload = {
            sub: id,
            email: email, 
          };
          const jwtResponse = await vault.jwtSign("pvi_uu5j3wsra3bkdslpvutk5vkikempyxqq", JSON.stringify(payload));
          // console.log(jwtResponse);
          const signedJWT = jwtResponse.result.jws;
      if (!email || !firstName || !lastName || !phoneNumber || !password) {
        return res.status(400).json({ message: 'Email, firstName, lastName, and phoneNumber are required.' });
      }

      const newUser = await prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
          phoneNumber,
          profileImg,
          dateOfBirth,
          bio,
          password,
          address: {
            create: {
              street: address.street,
              city: address.city,
              state: address.state,
              zipCode: address.zipCode,
              country: address.country,
            },
          },
        },
      });
      const clientIp=  req.ip;

      const auditData = {
        action: "Account creation",
        actor: `${firstName + lastName}`,
        target: email,
        status: "succces",
        message: `User created from the req -  ${clientIp}`,
        source: "web",
      };

    const logResponse = await audit.log(auditData, { verbose: true });

    await prisma.auditLog.create({
      data: {
        action: "Account creation",
        actor: `${firstName} ${lastName}`,
        target: email,
        status: "success",
        message: `User created from the req - ${clientIp}`,
        source: "web",
        userId: newUser.id
      },
    });

      const responsePayload = {
        message: 'User registered successfully',
        user: newUser,
        token: signedJWT,
      };
      res.cookie('jwtToken', signedJWT, {
        secure: true, 
        httpOnly: true, 
        maxAge: 3600000, 
      }).status(201).json(responsePayload);
    } catch (error) {
      if (error instanceof PangeaErrors.APIError) {
        console.log(error.summary, error.pangeaResponse);
      }
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

export default userController;