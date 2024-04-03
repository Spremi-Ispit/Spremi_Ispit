# Commands

```
sudo mysql -u root -p
SHOW DATABASES;
```

```
USE spremiis_dev;
SHOW TABLES;
```

```
DROP DATABASE IF EXISTS spremiis_dev;
CREATE DATABASE IF NOT EXISTS spremiis_dev;
```

# Export data

```
mysqldump -u root -p --no-create-info spremiis_dev > data.sql;
```

# Import data

```
$ mysql -u root -p -h localhost spremiis_dev < data.sql;
```

[ImportExport](https://stackoverflow.com/questions/11407349/how-to-export-and-import-a-sql-file-from-command-line-with-options)
