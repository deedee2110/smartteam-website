            main=document.getElementById("main")
            register=document.getElementById("register")
            contact=document.getElementById("contact")
            aboutus=document.getElementById("aboutus")
            store=document.getElementById("store")
            main.style.display = "block"
            aboutus.style.display = "none"
            register.style.display = "none"
            contact.style.display = "none"
            store.style.display = "none"
            

            function showMain(){
                register.style.display = "none"
                main.style.display = "block"
                contact.style.display = "none"
                aboutus.style.display = "none"
                store.style.display = "none"
            }

            function showRegister(){
                register.style.display = "block"
                main.style.display = "none"
                contact.style.display = "none"
                aboutus.style.display = "none"
                store.style.display = "none"
            }
            function showContact(){
                register.style.display = "none"
                main.style.display = "none"
                contact.style.display = "block"
                aboutus.style.display = "none"
                store.style.display = "none"
            }
            function showAboutus(){
                register.style.display = "none"
                main.style.display = "none"
                contact.style.display = "none"
                aboutus.style.display = "block"
                store.style.display = "none"
            }
            function showStore(){
                register.style.display = "none"
                main.style.display = "none"
                contact.style.display = "none"
                aboutus.style.display = "none"
                store.style.display = "block"
            }
