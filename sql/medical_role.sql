
INSERT INTO `medical`.`role` (`ro_id`, `ro_name`) VALUES (1, 'ROLE_ADMIN');
INSERT INTO `medical`.`role` (`ro_id`, `ro_name`) VALUES (2, 'ROLE_DOCTOR');
INSERT INTO `medical`.`role` (`ro_id`, `ro_name`) VALUES (3, 'ROLE_PATIENT');
INSERT INTO `medical`.`role` (`ro_id`, `ro_name`) VALUES (4, 'ROLE_AGENT'); 


INSERT INTO `medical`.`user` (`us_id`, `us_username`, `us_password`) VALUES (1, 'admin', '$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK');
INSERT INTO `medical`.`user` (`us_id`, `us_username`, `us_password`) VALUES (2, 'doctor', '$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK');
INSERT INTO `medical`.`user` (`us_id`, `us_username`, `us_password`) VALUES (3, 'patient', '$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK');
INSERT INTO `medical`.`user` (`us_id`, `us_username`, `us_password`) VALUES (4, 'agent', '$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK'); 

INSERT INTO `medical`.`user_role` (`ur_us_id`, `ur_ro_id`) VALUES (1, 1);
INSERT INTO `medical`.`user_role` (`ur_us_id`, `ur_ro_id`) VALUES (2, 2);
INSERT INTO `medical`.`user_role` (`ur_us_id`, `ur_ro_id`) VALUES (3, 3);
INSERT INTO `medical`.`user_role` (`ur_us_id`, `ur_ro_id`) VALUES (4, 4); 

insert into medical.doctor values(1,'abhinav','sharma',22,'male','1997-03-24',8527973210,1234567890,'abc@gmail.com','$2a$10$R/lZJuT9skteNmAku9Y7aeutxbOKstD5xE5bHOf74M2PHZipyt3yK','address1','address2','city','state',560045,'degree','speciality','work','hospital',null);

select * from medical.user_role;
select * from medical.user;
select * from medical.role;