class App {

    runApplication()
    {
        
        for (let getal1 = 1; getal1 <= 50; getal1++)
        {
            
            for (let getal2 = 1; getal2 <= 50; getal2++)
            {
              console.log(getal1, "*", getal2, "=", getal1 * getal2)  
            }
        }
            
        
    }
}

let app = new App();
app.runApplication();
