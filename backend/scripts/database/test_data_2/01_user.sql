

INSERT INTO `user` (`username`, `email`, `password`, `role`) VALUES
('Admin', 'admin@spremiispit.com','$2b$10$w1gSmaNYIDSH.xMGYF5OZOXTsIfskuW4BSlVmFR9yepzWDR/jvOIa', 'admin'), -- password = 123
('a','a@elfak.rs','$2b$10$Mr4ZX.U07sw..Yk71WQu.uqreE9HQ6YCnFfMLnAOlSRXrT5NrEHwm','visitor'),
('b','b@elfak.rs','$2b$10$wHvK950voZQ4tqZEUdJyLeKU.PEn/VbCNOkMb0.WUNOs2amZPDFS2','visitor'),
('c','c@elfak.rs','$2b$10$qlqFhmY25PhPyP0daaRsSO7ZYlrubtQIZY4a7h4OqaOz3gmariSHe','visitor'),
('d','d@elfak.rs','$2b$10$mok1UWGh9T4Rb4c6pTqPp.w1J8qujj6LMftKRUXPQG/vABI8fclGu','visitor');

UPDATE user
SET banned = true
where username='a';
