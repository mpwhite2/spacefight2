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
namespace SpriteKind {
    export const Player2 = SpriteKind.create()
    export const Player1 = SpriteKind.create()
    export const Pewer = SpriteKind.create()
}
function rotatePlayer (playerSprite: Sprite, direction: number) {
    transformSprites.changeRotation(playerSprite, direction)
}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Fire_the_rockets(Player1)
})
sprites.onOverlap(SpriteKind.Player1, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.player1.changeLifeBy(-1)
    otherSprite.destroy()
    info.player2.changeScoreBy(1)
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    Fire_the_lasers(Player2)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Pewer, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
    otherSprite.destroy()
    info.player1.changeScoreBy(1)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    Fire_the_rockets(Player2)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    rotatePlayer(Player2, 30)
})
function Fire_the_rockets (mySprite: Sprite) {
    music.bigCrash.play()
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
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    rotatePlayer(Player1, 30)
})
function Fire_the_lasers (mySprite: Sprite) {
    LaserDir = transformSprites.getRotation(mySprite) - 90
    LaserDirRads = LaserDir * 3.1416 / 180
    Laser_X = Laser__V * Math.cos(LaserDirRads)
    Laser_Y = Laser__V * Math.sin(LaserDirRads)
    if (mySprite == Player2) {
        Pewpew = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 8 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, Laser_X, Laser_Y)
        music.pewPew.play()
    } else {
        Laser = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Pewer)
        Laser.setPosition(mySprite.x, mySprite.y)
        Laser.setVelocity(Laser_X, Laser_Y)
        music.zapped.play()
    }
}
info.player1.onLifeZero(function () {
    Player1.destroy(effects.disintegrate, 500)
    pause(1000)
    game.splash("Player 2 wins!")
    if (controller.player1.isPressed(ControllerButton.Up)) {
        game.reset()
    }
})
info.player2.onLifeZero(function () {
    Player2.destroy(effects.disintegrate, 500)
    pause(1000)
    game.splash("Player 1 wins!")
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    rotatePlayer(Player1, -30)
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    Fire_the_lasers(Player1)
})
let Laser: Sprite = null
let Pewpew: Sprite = null
let Laser_Y = 0
let Laser_X = 0
let LaserDirRads = 0
let LaserDir = 0
let ThrustY = 0
let ThrustX = 0
let ThrustDirRads = 0
let ThrustDir = 0
let Laser__V = 0
let Thruster_V = 0
let Player1: Sprite = null
let Player2: Sprite = null
Player2 = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 6 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 8 6 . . . . . . . 
    . . . . . . 8 8 9 8 . . . . . . 
    . . . . . . 8 6 9 8 . . . . . . 
    . . . . . c c c 8 8 8 . . . . . 
    . . . . 8 8 6 6 6 9 8 8 . . . . 
    . . 8 f f f c c e e f f 8 8 . . 
    . 8 8 8 8 8 8 6 6 6 6 9 6 8 8 . 
    8 8 8 8 8 8 8 8 6 6 6 9 6 6 8 8 
    8 8 8 8 8 8 8 8 6 6 6 6 9 6 8 8 
    `, SpriteKind.Player2)
Player2.setStayInScreen(true)
Player1 = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 2 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . e 2 . . . . . . . 
    . . . . . . e e 4 e . . . . . . 
    . . . . . . e 2 4 e . . . . . . 
    . . . . . c c c e e e . . . . . 
    . . . . e e 2 2 2 4 e e . . . . 
    . . c f f f c c e e f f e e . . 
    . c c c c e e 2 2 2 2 4 2 e e . 
    c c c c c c e e 2 2 2 4 2 2 e e 
    c c c c c c e e 2 2 2 2 4 2 e e 
    `, SpriteKind.Player1)
Thruster_V = 10
Player1.setStayInScreen(true)
Laser__V = 100
info.player2.setLife(10)
info.player1.setLife(10)
info.player2.setScore(0)
info.player1.setScore(0)
