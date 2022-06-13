const msgAqui = document.getElementById('msgaqui')
const botão = document.getElementById('botão')
const frases = [
    "Um amigo falso e maldoso é mais temível que um animal selvagem; o animal pode ferir seu corpo, mas um falso amigo irá ferir sua alma.",
    "Guardar raiva é como segurar um carvão em brasa com a intenção de atirá-lo em alguém; é você que se queima.",
    "Aqueles que estão livres de pensamentos rancorosos certamente encontram a paz.",
    "A lei da mente é implacável.O que você pensa, você cria.O que você sente, você atrai.O que você acredita torna-se realidade.",
    "Uma mentira pode salvar seu presente, mas condena seu futuro.",
    "Em nossas vidas, a mudança é inevitável. A perda é inevitável. A felicidade reside na nossa adaptabilidade em sobreviver a tudo de ruim.",
    "Não permita que os outros tire a sua paz. A paz vem de dentro de você mesmo. Não procure à sua volta.",
    "As palavras têm o poder de ferir e de sarar. Quando elas são boas, têm o poder de mudar o mundo.",
    "Nem teus piores inimigos podem fazer tanto dano como teus próprios pensamentos.",
    "Só há um tempo em que é fundamental despertar. Esse tempo é agora.",
    "Sua tarefa é descobrir o seu trabalho e, então, com todo o coração, dedicar-se a ele.",
    "Nascemos para morrer, conhecemos pessoas para as deixar e ganhamos coisas para as perder.",
    "Existem três classes de pessoas que são infelizes: a que não sabe e não pergunta, a que sabe e não ensina e a que ensina e não faz.",
    "Você, o seu ser, tanto quanto qualquer pessoa em todo o universo, merece o seu amor e sua afeição.",
    "Todas as coisas complexas estão condenadas à decadência.",
    "Jamais, em todo o mundo, o ódio acabou com o ódio. O que acaba com o ódio é o amor.",
    "Somos o que pensamos. Tudo o que somos surge com nossos pensamentos. Com nossos pensamentos, fazemos o nosso mundo.",
]
function aparecerMensagem(){

    if(msgAqui.value == ""){
        alert("Clique em 'NOVA MENSAGEM'")
        return
    }
    botão.setAttribute("disabled", true)

    const totalDeFrases = frases.length
    const numeroAleatorio = Math.floor(Math.random() * totalDeFrases)

    msgAqui.innerHTML = frases[numeroAleatorio]

    msgAqui.style.opacity = 2;
    setTimeout(function(){
        msgAqui.style.opacity = 0;
        botão.removeAttribute("disabled")
    }, 10000)
}