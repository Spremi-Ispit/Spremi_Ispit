# myApp

> **Project directory:**

```
cd /home/repos/Spremi_Ispit/Development/Spremi_Ispit/backend
```

## Setup

1. **Install and start**

   ```
   sudo apt install nginx
   sudo systemctl start nginx
   ```

2. **Create a new Nginx configuration file** in the `/etc/nginx/sites-available/` directory.

   ```
   sudo nano /etc/nginx/sites-available/backendDevelopment
   ```

3. **Edit the configuration file** to set up the reverse proxy.

   ```
    server {
        listen 80;
        # Server name or IP
        server_name 207.180.195.166;

        location /myApp/ {
            proxy_pass http://localhost:3006;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
   ```

4. **Enable the configuration** by creating a symbolic link from your configuration file to the sites-enabled directory:

   ```
   sudo ln -s /etc/nginx/sites-available/backendDevelopment /etc/nginx/sites-enabled/
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
