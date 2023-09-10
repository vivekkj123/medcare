
import {
  PangeaConfig,
  VaultService,
  PangeaErrors,
  AuditService,
} from "pangea-node-sdk";

const Vaulttoken = "pts_lyahtxt5kkniiocm22eb5rq7ivxam7k4";
const Audittoken = "pts_7vplvrrefsnpsccgr6kua5rgbalu7gcz";
const Vaultconfig = new PangeaConfig({ domain: "aws.us.pangea.cloud" , configID: "pci_6g5iuu34ubzc53lvnfoiwuwjooob76m7" });
const AuditConfig = new PangeaConfig({ domain: "aws.us.pangea.cloud" , configID: "pci_mvnexbdcsxlzlavotfai6fe6bxebsixm" });
const vault = new VaultService(Vaulttoken, Vaultconfig);
const audit = new AuditService(Audittoken, AuditConfig);

export {  vault , PangeaErrors , audit };

