INSERT INTO `user` (`username`, `email`, `password`, `role`) VALUES
('Admin', 'admin@spremiispit.com','$2b$10$m6h31jtlXT6L3M/uwory8OjhE9gDMpIuTjYMo2P84jltANjBZsPDC', 'admin'), -- password = P@ssw0rd1234
('a','a@elfak.rs','$2b$10$m6h31jtlXT6L3M/uwory8OjhE9gDMpIuTjYMo2P84jltANjBZsPDC','visitor'),
('b','b@elfak.rs','$2b$10$m6h31jtlXT6L3M/uwory8OjhE9gDMpIuTjYMo2P84jltANjBZsPDC','visitor'),
('c','c@elfak.rs','$2b$10$m6h31jtlXT6L3M/uwory8OjhE9gDMpIuTjYMo2P84jltANjBZsPDC','visitor'),
('d','d@elfak.rs','$2b$10$m6h31jtlXT6L3M/uwory8OjhE9gDMpIuTjYMo2P84jltANjBZsPDC','visitor');

UPDATE user
SET banned = true
where username='a';
