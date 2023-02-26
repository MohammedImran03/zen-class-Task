class UberPrice{
    constructor(ubervehicle,Distancetravelled){
        this.Distancetravelled=Distancetravelled;
        this.ubervehicle=ubervehicle;
    }
    uberauto(){
        let Baseprice=20;
        let Totalprice;
        if(this.Distancetravelled<=5)
	 {
	      Totalprice=this.Distancetravelled*Baseprice;
	  }
	else if(this.Distancetravelled>5)
	 {
	   Totalprice=5*Baseprice+(this.Distancetravelled-5)*25;
	 }
	else if(this.Distancetravelled>=10)
	{
	    Totalprice=((5*Baseprice)+5*25)+(this.Distancetravelled-10)*30;
	}
        return Totalprice;
    }
    ubercar(){
        let Baseprice=25;
        let Totalprice;
        if(this.Distancetravelled<=5)
        {
             Totalprice=this.Distancetravelled*Baseprice;
         }
       else if(this.Distancetravelled>5)
        {
          Totalprice=5*Baseprice+(this.Distancetravelled-5)*30;
        }
       else if(this.Distancetravelled>=10)
       {
           Totalprice=((5*Baseprice)+5*30)+(this.Distancetravelled-10)*35
       }
           return Totalprice;
    }
    uberbike(){
        let Baseprice=15;
        let Totalprice;
        if(this.Distancetravelled<=5)
        {
             Totalprice=this.Distancetravelled*Baseprice;
         }
       else if(this.Distancetravelled>5)
        {
          Totalprice=5*Baseprice+(this.Distancetravelled-5)*20;
        }
       else if(this.Distancetravelled>=10)
       {
           Totalprice=((5*Baseprice)+5*20)+(this.Distancetravelled-10)*325;
       }
           return Totalprice;
    } 
}

let uberpricecheck=new UberPrice("ubercar","5");
console.log(uberpricecheck.ubercar());


