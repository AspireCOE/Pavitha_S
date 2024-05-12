// switch statement

const button=document.querySelector('button')

let resultdiv=document.createElement('div')
resultdiv.id='result'
document.getElementById('wrapper').appendChild(resultdiv)



// event listener

button.addEventListener('click',displayStats)

function displayStats()
{
    console.log('clicked')
    const input=document.getElementById("input")
    const city=input.options[input.selectedIndex].value
    let population=0,literacyRate=0,language=0;
    switch(city)
    {
        case 'Bengaluru':
            population:90000
            literacyRate: 67
            language:'kannada'
            break
        

        case 'Chennai':
            population:83483920
            literacyRate:89
            language:'Tamil'
            break

        case 'Mumbai':
            population:87349832948
            literacyRate:78
            language:'Marathi'
            break

        case 'Delhi':
            population:74385732
            literacyRate:67
            language:'Hindi'


    }
    let text=`The Indian city og ${city} has a population of ${population} with the literacy rate of ${literacyRate} and they speak ${language} language`
    document.getElementById('result').innerHTML=text
}