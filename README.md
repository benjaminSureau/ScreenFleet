# screenfleet

## Cloud

Utilisation du S3 Bucket d'amazon AWS

### API

####Configuration De l'API

Ajouter les key AWS, impossible de les mettre dans le code et les push car mail reçu par AWS (Sécurité)

####Upload d'un fichier

Route : POST http://localhost:3800/API/upload

Paramètre :

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
