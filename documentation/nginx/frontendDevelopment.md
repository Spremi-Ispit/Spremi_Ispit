# Frontend Development

> **Project directory:**

```
cd /home/repos/Spremi_Ispit/Development/Spremi_Ispit/frontend
```

## Setup

1. **Install and start**

   ```
   sudo apt install nginx
   sudo systemctl start nginx
   ```

2. **Create a new Nginx configuration file** in the `/etc/nginx/sites-available/` directory.

   ```
   sudo nano /etc/nginx/sites-available/frontendDevelopment
   ```

3. **Edit the configuration file** to set up the reverse proxy.

   ```
   server {
      listen 80;
      server_name 207.180.195.166;

      location / {
         root /home/repos/Spremi_Ispit/Development/Spremi_Ispit/frontend/dist;
         index index.html;
         try_files $uri $uri/ =404;
      }
   }
   ```

4. **Enable the configuration** by creating a symbolic link from your configuration file to the sites-enabled directory:

   ```
   sudo ln -s /etc/nginx/sites-available/frontendDevelopment /etc/nginx/sites-enabled/
   ```

5. **Test the configuration** to make sure there are no syntax errors:

   ```
   sudo nginx -t
   ```

   If the test is successful, you’ll see a message that says configuration file /etc/nginx/nginx.conf test is successful.

6. **Reload Nginx** to apply the changes:

   ```
   sudo systemctl reload nginx
   ```
