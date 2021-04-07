# Start

#UI Projects

```
ng new ui --skipInstall=true --skipGit=true --style=scss --createApplication=false --commit=false 
cd ui
ng g application admin --prefix=admin  --skipInstall=true --style=scss 
d
ng g library shared --prefix=lib  --skipInstall=true --style=scss 
npm i 

ng add @angular/material
ng add @angular/cdk

npm install material-design-icons --save
npm install roboto-fontface --save

```
add styles to each project 

```json
    "projects": { 
            "YOUR-PROJECT-NAME": { 
                "architect": { 
                    "build": { 
                        "options": {            
        "styles": [
              "./node_modules/roboto-fontface/css/roboto/roboto-fontface.css",
              "./node_modules/material-design-icons/iconfont/material-icons.css",
              "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
              "projects/admin/src/styles.scss"
            ],
```

```
ng generate @angular/material:navigation components/nav --project=shared  --skip-import=true
ng g c components/page-not-found --project=shared
ng g c components/access-denied --project=shared




ng generate @angular/material:address-form dashboard --project=admin
ng generate @angular/material:table table --project=admin
```


```
npm install @ngrx/{store,effects,entity,store-devtools} --save
ng generate @ngrx/schematics:store State --root --module app.module.ts
ng generate @ngrx/schematics:effect App --root --module app.module.ts
```
Generate modules
```
ng g module users --module=app.module  --project=admin --route=users --routing=true 
```
