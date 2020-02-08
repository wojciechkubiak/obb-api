# OBB REST API

### Must have:
1. [Download](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) PostgreSQL 

    [Linux Debian/Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-16-04)
    [Linux Arch](https://linuxhint.com/install-postgresql-10-arch-linux/)
    [Linux Fedora](https://computingforgeeks.com/how-to-install-postgresql-on-fedora/)
    [Linux SUSE](https://www.osradar.com/postgresql-opensuse-15/)
    #####
2. [Download](https://nodejs.org/en/download/) NodeJS (LTS) 
### How to:
1. Install dependencies using command 
    ``` npm install ```
    #####
2. Run API 
    ``` npm start ```
    #####
### Routes

1. Global measures
    ```[GET] /global ```
    ```[GET] /global-latest ```
    ```[POST] /add-global ```
    ```[PUT] /edit-global/[id] ```
    ```[DELETE] /delete-global/[id] ```
    #####
2. Pens
    ```[GET] /pens ```
    ```[GET] /pens-isolated ```
    #####
3. Pen measures
    ```[GET] /pen-measures ```
    ```[GET] /pen-measures/[id] ```
    ```[POST] /add-pen-measure ```
    ```[PUT] /edit-pen-measure/[id] ```
    ```[DELETE] /delete-pen-measure/[id] ```
    #####
4. Forage
    ```[GET] /forage/[id] ``` 
    ```[POST] /add-forage ``` 
    ```[PUT] /edit-forage/[id] ``` 
    ```[DELETE] /delete-forage/[id] ``` 
    #####
5. Water
    ```[GET] /water-feach-pen/[id] ``` 
    ```[GET] /water-pen/[id] ``` 
    ```[POST] /water-add ``` 
    ```[PUT] /water-edit/[id] ```
    ```[DELETE] /water-delete/[id] ```
    #####
6. Pigs
    ```[GET] /pigs ``` 
    ```[GET] /active-pigs/[id] ```
    ```[GET] /out-pigs ``` 
    ```[POST] /add-pig ``` 
    ```[PUT] /edit-pig/[id] ``` 
    ```[PUT] /pig-sold/[id] ``` 
    ```[PUT] /pig-dead/[id] ``` 
    #####
7. Exams
    ```[GET] /exam/[id] ``` 
    ```[GET] /exams-pig/[id] ``` 
    ```[POST] /add-exam ``` 
    ```[PUT] /edit-exam/[id] ``` 
    ```[DELETE] /delete-exam/[id] ``` 