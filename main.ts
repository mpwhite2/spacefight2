enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
function rotatePlayer (playerSprite: Sprite, direction: number) {
    transformSprites.changeRotation(playerSprite, direction)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    doSomething(Player1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    rotatePlayer(Player1, -30)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    rotatePlayer(Player1, 30)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    rotatePlayer(Player2, 30)
})
function doSomething (mySprite: Sprite) {
    let Thruster_V = 0
    ThrustDir = transformSprites.getRotation(mySprite) - 90
    ThrustDirRads = ThrustDir * 3.1416 / 180
    ThrustX = Thruster_V * Math.cos(ThrustDirRads)
    ThrustY = Thruster_V * Math.sin(ThrustDirRads)
    mySprite.vx += ThrustX
    mySprite.vy += ThrustY
}
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    rotatePlayer(Player2, -30)
})
let ThrustY = 0
let ThrustX = 0
let ThrustDirRads = 0
let ThrustDir = 0
let Player1: Sprite = null
let Player2: Sprite = null
Player2 = sprites.create(img`
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . 7 f 7 . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 f 7 . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 f 7 . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . f 7 f 7 f . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . f 7 f 7 f . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . f 7 f 7 f . . . . . 
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . 7 7 f 7 f 7 f 7 7 . . . 
    `, SpriteKind.Player)
Player1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . 8 f 8 . . . . . . . 
    . . . . . . 8 f 8 . . . . . . . 
    . . . . . . 8 f 8 . . . . . . . 
    . . . . . . 8 f 8 . . . . . . . 
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . 8 2 8 8 8 8 2 8 8 . . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    `, SpriteKind.Player)
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.TWO,
MakeyMakey.MakeyMakeyKey.W,
MakeyMakey.MakeyMakeyKey.S,
MakeyMakey.MakeyMakeyKey.A,
MakeyMakey.MakeyMakeyKey.D,
MakeyMakey.MakeyMakeyKey.F,
MakeyMakey.MakeyMakeyKey.G
)
