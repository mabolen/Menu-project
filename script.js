const npcInput = document.getElementById('npc-input')
const enemyInput = document.getElementById('enemy-input')
const npcList = document.getElementById('npc-list')
const enemyList = document.getElementById('enemy-list')
let npcArr = []
let enemyArr = []

class Npc {
    constructor(){
    }

    create() {
        npcArr[0] == undefined ? npcArr.push(npcInput.value) : npcArr.push(' \n' + npcInput.value)
        alert(`New NPC: '${npcInput.value}' has been created`)
        npcInput.value = ''
        npcList.innerText = npcArr
    }

    view() {
        alert(`Current NPCs: \n ${npcArr}`)
    }

    delete() {
        npcArr = []
        alert('All NPCs deleted')
        npcList.innerText = ''
    }
}

class Enemy {
    constructor(){
    }

    create() {
        enemyArr[0] == undefined ? enemyArr.push(enemyInput.value) : enemyArr.push(' \n' + enemyInput.value)
        alert(`New enemy: '${enemyInput.value}' has been created`)
        enemyInput.value = ''
        enemyList.innerText = enemyArr
    }

    view() {
        alert(`Current Enemies: \n ${enemyArr}`)
    }

    delete() {
        enemyArr = []
        alert('All Enemies deleted')
        enemyList.innerText = ''
    }
}

//npc and functions
const newNpc = new Npc()

const createNpc = () => {
    newNpc.create()
}

const viewNpc = () => {
    newNpc.view()
}

const deleteNpc = () => {
    newNpc.delete()
}

//enemy and functions
const newEnemy = new Enemy()

const createEnemy = () => {
    newEnemy.create()
}

const viewEnemy = () => {
    newEnemy.view()
}

const deleteEnemy = () => {
    newEnemy.delete()
}