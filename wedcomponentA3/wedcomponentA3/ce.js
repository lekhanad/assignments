const titles=[
    {title:'The five orange pips', subtitle: 'A deliver of innocous leter followed by death'},
    {title:'A study in Scarlet',subtitle:'Dr,John Watson meets Mr.Shrlock '},
    {title:'A study in Scarlet',subtitle:'Dr,John Watson meets Mr.Shrlock '}
    ]

class Blogcard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})

        
    }
    connectedCallback(){
        // const template =document.getElementById('card-template')
        // titles.forEach(title=>{
        //     const instance =document.importNode(template.content,true)
        //     instance.querySelector('.title').innerHTML =title.title
        //     instance.querySelector('.subtitle').innerHTML =title.subtitle

        //     this.appendChild(instance)

        // } )

        this.render()
    }
    render(){
        const {shadowRoot }=this
        const templateNode =document.getElementById('card-template')

        shadowRoot.innerHTML =''
        if(templateNode){
            titles.forEach(title=>{
                const instance =document.importNode(templateNode.content,true)
                instance.querySelector('.title').innerHTML =title.title
                instance.querySelector('.subtitle').innerHTML =title.subtitle
    
                // this.appendChild(instance)
                shadowRoot.appendChild(instance)
    
            } )

        }else{
            shadowRoot.innerHTML ='<p>Shadow Root failed.Please try again later.</p>'

        }
    }

}
customElements.define('blog-card',Blogcard)