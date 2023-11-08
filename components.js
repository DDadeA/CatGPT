
// @ts-check

// CAT 이스터에그 넣기
window.onload = main;
function main(){
    const yourProfile = new user();
    const gptProfile = new answerer();

    addLog('Why do cats hate dogs?', 'Yesterday');
    addLog('한글 테스트', 'Yesterday')
    addLog('Long texts should be hidden by the dissolve effect.')
    addLog('Nyan Nyan Nyan Nyan Nyan Nyan Nyan ')
    addLog('The cuteness of cats');
    
    let selected = document.getElementsByClassName('log')[0];
    selected.classList.add('selected');


    addChat('Why cats are cute?', yourProfile);
    addChat('Nya nyan. Nyan nya nyan nya nya nyan nya, nyan nyan nya nya.', gptProfile);
}


class profile  {
    /**
     * 
     * @param {String} profPicturePath 
     */
    constructor(profPicturePath){
        this.profPicturePath = profPicturePath;

        this.pictureImageElement = document.createElement('img');
        this.pictureImageElement.src = profPicturePath;
    }
}
class user     extends profile{
    constructor(profPicturePath='user.png'){
        super(profPicturePath);
    }
}
class answerer extends profile{
    constructor(profPicturePath='favicon.png'){
        super(profPicturePath);
    }
}

/**
 * 
 * @param {String} text 
 * @param {profile} profile
 */
function addChat(text, profile, destination='chatContainer'){
    let chatDiv = makeWithClass('div', 'chat');
    
    // Add Profile image
    chatDiv.appendChild(profile.pictureImageElement.cloneNode(true));

    // Add text
    let chat = document.createElement('p');
    chat.innerHTML = text;
    chatDiv.appendChild(chat);
    
    // Append to container
    document.getElementById(destination).appendChild(chatDiv);
}


/**
 * create and add log element after {where}. return Success or failure
 * @param {String} topic - topic text
 * @param {String} where - id of logDate (destination)
 * @return {boolean}
 */
function addLog(topic, where="Today"){
    
    // Create container
    let newContainer = makeWithClass('div', 'log');

    // Add a wrapper for text dissolve effect.
    newContainer.appendChild(
        makeWithClass('div', 'wrapper')
        );
    
    // Temporary - Add random id
    newContainer.id = Math.random().toString(36).substr(2, 16);

    // Add a cat icon
    let icon = makeWithClass('i', 'fas fa-cat');
    icon.style.color = '#eee';
    newContainer.appendChild(icon);

    // Add the topic text
    newContainer.innerHTML += topic;

    // Append to destination
    let destination = document.getElementById(where);
    if (destination==null) {
        console.error(`There's no ${where}!`);
        return false; }
    
    // if no problem
    destination.after(newContainer);
    return true;
}

/**
 * @param {String} className
 */
function makeWithClass(element, className) {
    let div = document.createElement(element);
    div.className = className;
    return div
}