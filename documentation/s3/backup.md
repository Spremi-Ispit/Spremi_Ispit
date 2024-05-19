# Backup

## Database

**export**

```
cd /home/backup
mysqldump -u root -p --no-create-info spremiis_prod > data.sql;
cp /home/backup/data.sql /home/repos/Spremi_Ispit/Production/Spremi_Ispit/backend/database/
```

**backup to s3 bucket**

```
s3cmd sync /home/backup/data.sql s3://spremiispit/
```

## Files

**copy files**

```
cp -r /home/repos/Spremi_Ispit/Production/Spremi_Ispit/backend/files /home/backup/files
```

**check directory size**

```
du -sh files/
```

**backup to s3 bucket**

```
s3cmd sync /home/backup/files s3://spremiispit/
```
