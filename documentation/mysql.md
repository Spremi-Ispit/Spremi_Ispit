sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql.service
sudo systemctl status mysql
sudo systemctl start mysql

SHOW DATABASES;

1. **Log in to MySQL as root without a password**

   ```
    sudo mysql -u root
   ```

2. **Change the password for the root user**

   ```
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';
   ```

3. **Flush the privileges to ensure that the changes take effect:**

   ```
    FLUSH PRIVILEGES;
   ```

4. **Exit MySQL**

   ```
    exit;
   ```

5. **Log in to MySQL as root with the password**

   ```
    sudo mysql -u root -p
   ```
