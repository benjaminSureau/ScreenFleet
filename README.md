# screenfleet

## Documentation Cloud

Utilisation du S3 Bucket d'amazon AWS

### API

####Configuration De l'API

Ajouter les key AWS, impossible de les mettre dans le code et les push car mail reçu par AWS (Sécurité)

Les codes sont sur le sketchboard 

Fichier à modifier : /routes/core/fileController.js
```
aws.config.update({
    secretAccessKey: 'xXX',
    accessKeyId: 'XXx',
    region: 'eu-west-3'
});
```

####Upload d'un fichier

Route : POST http://localhost:3800/API/upload

Body JSON :

```
{
   "file": fichieràUpload
}
```

Important : la requête doit se faire en form-data


Résultat :
```
{
    "fileUrl": "https://screenfleet.s3.eu-west-3.amazonaws.com/1557151951757VfE_html5.mp4",
    "keyFile": "1557151951757VfE_html5.mp4"
}
```

Si une erreure s'est produite le résultat sera le suivant :
```
{
    "error": 500
}
```


####Récupérer les fichiers présent sur le bucket s3

Route : GET http://localhost:3800/API/getAllFiles

Résultat :
```
{
    "size": 3,
    "content": [
        {
            "fileUrl": "https://s3.eu-west-3.amazonaws.com/screenfleet/1557131009235DSC_0169.JPG",
            "keyFile": "1557131009235DSC_0169.JPG"
        },
        {
            "fileUrl": "https://s3.eu-west-3.amazonaws.com/screenfleet/15571335533231557131009235DSC_0169.JPG",
            "keyFile": "15571335533231557131009235DSC_0169.JPG"
        },
        {
            "fileUrl": "https://s3.eu-west-3.amazonaws.com/screenfleet/1557151951757VfE_html5.mp4",
            "keyFile": "1557151951757VfE_html5.mp4"
        }
     ]
}
```
Si une erreure s'est produite le résultat sera le suivant :
```
{
    "error": 500
}
```


####Récupérer le contenu d'un fichier choisi

Route : GET http://localhost:3800/API/getFile?keyFile=1557144197139getImage.JPG

Résultat :
```
content of Image
```

Si le paramètre keyFile n'est pas renseigné ou est vide, le résultat sera le suivant :
```
{
    "error": 500,
    "information": "You Must send in parameter the keyFile of the file"
}
```

Si le keyFile mis en paramètre ne correspond à aucun des fichiers stocké dans le s3 bucket le résultat sera le suivant :
```
{
    "error": 500,
    "information": "the file doesn't exist in the bucket"
}
```

Si une erreure s'est produite le résultat sera le suivant :
```
{
    "error": 500
}
```