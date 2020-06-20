## First steps
_______________

- [x] subscribe
- [x] login
- [x] logout
- [x] unsubscribe

- [~] client UI login + room (gopherjs + vecty) -> UI
- [x] room REST
- [ ] client gameworld (webGL) -> Tiles API ->

- GetTileFromPosition()
-> {position: X/Y}
<- [{id: "", tile: "", tileSize: N, tileXNum: N}]

- [x] websocket server-side
- [x] websocket client-side

- [ ] websocket client -> server
- [ ] websocket server -> client

- [ ] client display (sprite/texture/shader)

## Resources
___________


## Classes
___________

- [ ] All PCs have a close range hit interrupt

### [ ] `Trickster`

- `Shenanigans` Switch 2 entities non PC. Cost 3 MP. Gains MP = 10% * (HP_target_0 + HP_target_1).

- `Vanish` Quick TP to close position. TP Position 3m. Cost 5 MP.

- `Scarecrow` Summon a scarecrow then switch your position with it. Distance 5m. TP cast 3s. Cost 8 MP. Gains MP = 3 when position switching.

- `Shadow` Switch position with other PC. Cost 10 MP.

### [ ] `Mesmerist`

- `Wise mind` Take control of 1 non PC entity. Duration 2s. Cost 4 MP. Gains MP = HP_target_0 * 10%.

- `Justice shield` Return abilities to source entities. Shield buff self. Duration 5s. Cost 5 MP.

- `Expanded mind` Take control of 2 non PC entity. Duration 6s. Cost 7 MP. Gains MP = 10% * (HP_target_0 + HP_target_1).

- `Ego fog` Summon 3 puppets of yourself then you switch position with one of them. TP cast 3s. Cost 10 MP.

### [ ] `Inquisitor`

- `Lifebound` Bind 2 non PC entities, all damages are transferred from one to eachother. Duration 5s. Cost 4 MP.

- `Lifetransfer` Absorb all HP of an owned non PC entity into a buff, then grant this buff to another entity. Buff 10% * absorbed HP each second 10 times. Cost 8 MP.

- `Holy blood` Debuff an entity with a MP absorber. Target loses 10 HP each 3 seconds 3 times. Gains 1 MP at eacht tick successfully applied. Cost 3 MP.

- `Metamorphosis` Split himself into relics merged into other entities. Grant invisibility while 2 other entities are alive. Duration 6s. Cost 10 MP.


### [ ] `Scavenger`

- [ ] *special ability*

`Buffet` Eat entities

- [ ] *escape*

`Second life` Resurrect himself

## Civilizations

### [ ] `Shaman`

- [ ] `Totems`

Offensive AOE, collision, combo

- [ ] `Fountains`

Defensive AOE, collision, combo

- [ ] `Portals`

TP, buff

- [ ] `Trees`

Increasing stats, climbing, collision, combo

### [ ] `Necromancer`

- [ ] `Ghosts`

Move onto targets, ignore collision, curse

- [ ] `Undeads`

Move onto targets, damage

- [ ] `Demons`

Area geometry, damage

- [ ] `Ghouls`

Graph geometry, damage

### [ ] `Elementalist`

- [ ] `Fire`

Offensive AOE, combo

- [ ] `Water`

Ice floor, combo

- [ ] `Air`

Control

- [ ] `Earth`

collision, destruction

### [ ] `Engineer`

- [ ] `Turret`



- [ ] `Mines/traps`



- [ ] `Heal/Buff kit`



- [ ] `boots`



## Abilities
____________

- [ ] Apply runes
- [ ] Need specific amount of runes on target to launch ability
