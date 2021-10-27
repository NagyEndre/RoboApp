# :mechanical_arm::robot: robo-app

Move the robot joints to different positions and actuate the tool whether it is a robot hand or a gripper.  
Create your own robot setup in a [config file](src/model/robotConfigs.json) and change robot runtime.

## Commands

```
MOVE <jointIndex> X<pos> Y<pos> Z<pos>
OPEN <fingerIndex> | ALL | GRIPPER
CLOSE <fingerIndex> | ALL | GRIPPER
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Lints and fixes files

```
npm run lint
```

### Test

#### Run tests in non-interactive mode

```
npm test
```

#### Run tset in interactive mode

```
npx cypress open
```

### Compiles and minifies for production

```
npm run build
```
