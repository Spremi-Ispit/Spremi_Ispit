# Development

**Backend**

```
cd /home/repos/Spremi_Ispit/Development/Spremi_Ispit/backend
```

**Frontend**

```
cd /home/repos/Spremi_Ispit/Development/Spremi_Ispit/frontend
```

## Setup

1. **Install and start**

```
sudo apt install nginx
sudo systemctl start nginx
```

2. **Create a new Nginx configuration file**

```
sudo nano /etc/nginx/sites-available/development
```

3. **Edit the configuration file**

```
server {
    listen 80;
    server_name dev.spremiispit.com;

    client_max_body_size 1000M;

    location /backend/ {
        proxy_pass https://localhost:5000/backend/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location / {
        root /home/repos/Spremi_Ispit/Development/Spremi_Ispit/frontend/dist;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}

```

4. **Enable the configuration** by creating a symbolic link

```
sudo ln -s /etc/nginx/sites-available/development /etc/nginx/sites-enabled/
```

5. **Test the configuration**

```
sudo nginx -t
```

6. **Reload Nginx**

```
sudo systemctl reload nginx
```

7. **Disable the configuration**

```
sudo unlink /etc/nginx/sites-enabled/development
```
