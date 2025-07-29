import type SiteDto from "./siteDTO";

export default interface UserDTO {
  id: string;
  name: string;
  email: string;
  roles: string[];
  profileImage: string;
  site: SiteDto;
  //GET ALL USER PROPERTIES
}