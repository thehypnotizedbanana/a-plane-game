controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -70)
})
info.onCountdownEnd(function () {
    game.showLongText("we won!", DialogLayout.Left)
    game.over(true)
})
info.onLifeZero(function () {
    game.showLongText("the enemy has taken over our base oh-no", DialogLayout.Bottom)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    otherSprite.startEffect(effects.fire)
    sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.startEffect(effects.fire)
    otherSprite.destroy()
})
let h: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
game.setDialogFrame(img`
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    `)
game.setDialogTextColor(0)
game.showLongText("the enemy is invading try to shoot down as many bombers as you can", DialogLayout.Center)
scene.setBackgroundColor(9)
info.setLife(2)
mySprite = sprites.create(img`
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............6...............
    .............696..............
    .............696..............
    .............666..............
    ............66666.............
    ...........6666666............
    ..........666666666...........
    .........66666666666..........
    .............666..............
    ............66666.............
    ...........666.666............
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
effects.clouds.startScreenEffect()
mySprite.setFlag(SpriteFlag.StayInScreen, true)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    . . . . . . . . 1 1 . . . . . . 
    . 1 1 1 1 1 1 1 1 . . . . . . . 
    1 2 1 1 2 1 1 2 1 . . . . . . . 
    . 1 1 1 1 1 1 1 1 . . . . . . . 
    . . . . . . . . 1 1 . . . . . . 
    . . . . . . . . . 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
info.startCountdown(60)
game.onUpdateInterval(500, function () {
    h = sprites.createProjectileFromSide(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        .............f................
        ........777..f..777...........
        ........7777fff7777...........
        .........777777777............
        ..........7777777.............
        ...........77777..............
        ...........77777..............
        ..........f77777f.............
        ........fff77777fff...........
        ..........f77777f.............
        ...........77777..............
        ..77777777777777777777777.....
        ..77777777777777777777777.....
        ...777777777777777777777......
        ....7777777777777777777.......
        .......7...77777...7..........
        .....fffff.77877.fffff........
        ...........87878..............
        ...........87778..............
        ...........77877..............
        ...........87878..............
        ...........87778..............
        ............888...............
        `, 0, 50)
    h.setKind(SpriteKind.Enemy)
    h.x = randint(0, 160)
})
