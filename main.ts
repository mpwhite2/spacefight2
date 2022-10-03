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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    rotatePlayer(Player1, -30)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    rotatePlayer(Player1, 30)
})
let Player1: Sprite = null
let Player2 = sprites.create(img`
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
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . 8 8 f f f f 8 8 . . . . 
    . . . . 8 8 f f f f 8 8 . . . . 
    . . . . 8 8 f f f f 8 8 . . . . 
    . . . . 8 8 f f f f 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 8 8 f f 8 8 f f 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    `, SpriteKind.Player)
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.ONE,
MakeyMakey.MakeyMakeyKey.W,
MakeyMakey.MakeyMakeyKey.S,
MakeyMakey.MakeyMakeyKey.A,
MakeyMakey.MakeyMakeyKey.D,
MakeyMakey.MakeyMakeyKey.F,
MakeyMakey.MakeyMakeyKey.G
)
