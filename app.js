class homebox{
    start(){
        window.location.replace("mainpage.html");
    }
}

class Warehouse{
    //----PRIVATE MEMBER ONLY----//
    _barrel_lenghth         = 0.0;
    _barrel_height          = 0.0;
    _pusher_mass            = 0.0;
    _spring_constant        = 0.0;
    _spring_recoil_distance = 0.0;
    _gravity                = 9.81;
    _X_offset               = 0.0;
    _Y_offset               = 0.0;
    _X_Distance_target      = 0.15;
    _Y_Distance_target      = 0.0;
    _width                  = 206.85;
    _height                 = 100;
    _Output_velocity        = 1;
    //----PRIVATE MEMBER ONLY----//

    Setup(){
        this._barrel_lenghth         = parseFloat(document.getElementById("barrel_lenghth").value);
        this._barrel_height          = parseFloat(document.getElementById("barrel_height").value);
        this._pusher_mass            = parseFloat(document.getElementById("pusher_mass").value) + 0.024;
        this._spring_constant        = parseFloat(document.getElementById("spring_constant").value);
        this._spring_recoil_distance = parseFloat(document.getElementById("spring_recoil_distance").value);
    }

    Get_manual_data(){
        this._X_offset          = parseFloat(document.getElementById("X_offset").value);
        this._Y_offset          = parseFloat(document.getElementById("Y_offset").value);
        this._X_Distance_target = parseFloat(document.getElementById("X_target").value);
        this._Y_Distance_target = parseFloat(document.getElementById("Y_target").value) + 0.755;
    }

    Get_Preset_data(){
        if(document.getElementById("preset_1").style.backgroundColor       == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.25;
            this._Y_Distance_target = 1.085;
        }
        else if(document.getElementById("preset_2").style.backgroundColor  == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.15;
            this._Y_Distance_target = 0.82;
        }
        else if(document.getElementById("preset_3").style.backgroundColor  == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.35;
            this._Y_Distance_target = 0.82;
        }
        else if(document.getElementById("preset_4").style.backgroundColor  == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.25;
            this._Y_Distance_target = 1.085;
        }
        else if(document.getElementById("preset_5").style.backgroundColor  == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.2;
            this._Y_Distance_target = 0.895;
        }
        else if(document.getElementById("preset_6").style.backgroundColor  == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.35;
            this._Y_Distance_target = 0.82;
        }
        else if(document.getElementById("preset_7").style.backgroundColor  == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.28;
            this._Y_Distance_target = 0.985;
        }
        else if(document.getElementById("preset_8").style.backgroundColor  == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.15;
            this._Y_Distance_target = 0.82;
        }
        else if(document.getElementById("preset_9").style.backgroundColor  == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.35;
            this._Y_Distance_target = 0.82;
        }
        else if(document.getElementById("preset_10").style.backgroundColor == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.25;
            this._Y_Distance_target = 1.085;
        }
        else if(document.getElementById("preset_11").style.backgroundColor == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.15;
            this._Y_Distance_target = 0.825;
        }
        else if(document.getElementById("preset_12").style.backgroundColor == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.3;
            this._Y_Distance_target = 0.865;
        }
        else if(document.getElementById("preset_13").style.backgroundColor  == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.25;
            this._Y_Distance_target = 1.085;
        }
        else if(document.getElementById("preset_14").style.backgroundColor  == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.33;
            this._Y_Distance_target = 0.895;
        }
        else if(document.getElementById("preset_15").style.backgroundColor  == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.15;
            this._Y_Distance_target = 0.82;
        }
        else if(document.getElementById("preset_16").style.backgroundColor  == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.21;
            this._Y_Distance_target = 0.985;
        }
        else if(document.getElementById("preset_17").style.backgroundColor  == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.2;
            this._Y_Distance_target = 0.82;
        }
        else if(document.getElementById("preset_18").style.backgroundColor  == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.35;
            this._Y_Distance_target = 0.82;
        }
        else if(document.getElementById("preset_19").style.backgroundColor == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.25;
            this._Y_Distance_target = 1.085;
        }
        else if(document.getElementById("preset_20").style.backgroundColor == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.3;
            this._Y_Distance_target = 0.825;
        }
        else if(document.getElementById("preset_21").style.backgroundColor == "rgb(255, 222, 89)"){
            this._X_offset          = 0;
            this._Y_offset          = 0;
            this._X_Distance_target = 0.2;
            this._Y_Distance_target = 0.865;
        }
    }

    Get_Speed(){
        if(document.getElementById("recbtns").style.backgroundColor      == "rgb(255, 222, 89)"){
            return 375;
        }
        else if(document.getElementById("recbtnx").style.backgroundColor == "rgb(255, 222, 89)"){
            return 150;
        }
        else if(document.getElementById("recbtnl").style.backgroundColor == "rgb(255, 222, 89)"){
            return 50;
        }
    }

}

class Calculation extends Warehouse{
    tmp1 = document.getElementById("preset_target").style.zIndex = 10;
    tmp2 = document.getElementById("recbtnx").style.backgroundColor = '#FFDE59'
    Get_data(){
        this.Setup();
        let ZInd = document.getElementById("preset_target").style.zIndex;
        if(ZInd > 1){
            this.Get_Preset_data();
        }
        else{
            this.Get_manual_data();
        }
        document.getElementById("Angle").textContent   = " : "  +  this.Angle_Calculate();
        document.getElementById("slideX").textContent  = " : " +  parseFloat(this._X_Distance_target - 0.15).toFixed(2) + "Meter";
        document.getElementById("slideY").textContent  = " : " +  parseFloat(this._X_offset).toFixed(2) + "Meter";
        document.getElementById("lct").style.transform = 'rotate(' + (-1 * this.Angle_Calculate()) + 'deg)';
        document.getElementById("lct").style.left = 60 - this._X_offset*40 + "vh";
        document.getElementById("lcb").style.left = 60 - this._X_offset*40 + "vh";
        document.getElementById('lct').style.top = (485 - ((this._Y_offset + this._barrel_height)*295))*0.128 + "vh";
        document.getElementById('lcb').style.top = 6.5 + (485 - ((this._Y_offset + this._barrel_height)*295))*0.128 + "vh";
        document.getElementById('G9top').style.left = ((this._X_Distance_target - 0.15) * 180) + 34 + "vh"
    }

    DegreeToRadian(degree){
        return degree * (Math.PI / 180);
    }

    GPE(angle){  //gravity potential energy
        return this._pusher_mass * this._gravity * this._spring_recoil_distance * Math.sin(this.DegreeToRadian(angle));
    }

    KE(velocity){  //kinetic energy
        return 0.5 * this._pusher_mass * Math.pow(velocity,2);
    }

    EPE(){   //elastic potential energy
        return 0.5 * this._spring_constant * Math.pow(this._spring_recoil_distance,2);
    }

    Velocity(angle){  //squash begin velocity
        return Math.sqrt(2 * (this.EPE() - this.GPE(angle)) / this._pusher_mass) * this._Output_velocity;
    }

    Angle_Calculate(){  // Find the right angle to launch a squash  
        if(this._X_offset <= -2){
            return("Can not Launch");
        }
        for(let theta = 0; theta <= 90; theta++){

            let Vx   = this.Velocity(theta) * Math.cos(this.DegreeToRadian(theta));
            let Vy   = this.Velocity(theta) * Math.sin(this.DegreeToRadian(theta));
            let Sx   = 2 + this._X_offset + this._barrel_lenghth - (this._barrel_lenghth * Math.cos(this.DegreeToRadian(theta)));
            let Goal = this._Y_Distance_target - this._barrel_height - this._Y_offset - (this._barrel_lenghth * Math.sin(this.DegreeToRadian(theta)));
            let Time = Sx/Vx;
            let Sy   = (Vy * Time) - (0.5 * this._gravity * Math.pow(Time,2));

            if(Sy >= Goal) 
                return theta;
        }
        return("Can not Launch");
    }

    Y_displace_Cal(){
        this.Get_data();
        const angle = this.Angle_Calculate();
        const Vx    = this.Velocity(angle) * Math.cos(this.DegreeToRadian(angle));
        const Vy    = this.Velocity(angle) * Math.sin(this.DegreeToRadian(angle));
        const Sx    = 2 + this._X_offset + this._barrel_lenghth - (this._barrel_lenghth * Math.cos(this.DegreeToRadian(angle)));
        const Time  = Sx/Vx;
        const Sy    = (Vy * Time) -     (0.5 * this._gravity * Math.pow(Time,2));
        const yc    = this._barrel_height + this._Y_offset + (this._barrel_lenghth * Math.sin(this.DegreeToRadian(angle)));
        document.getElementById("squash").style.bottom = 150*(Sy+yc)-120 + "vh";
        document.getElementById("squash").style.left   = 26 + (this._X_Distance_target*180) + "vh";
    }

    fixblur(){
        const scale = window.devicePixelRatio;
        document.getElementById("canvas").width  = Math.floor(this._width * scale * 7);
        document.getElementById("canvas").height = Math.floor(this._height * scale * 7);
        document.getElementById("canvas").getContext("2d").scale(scale,scale);
    }

    Animate(){
        this.fixblur();
        this.Get_data()
        const speed      = this.Get_Speed();
        const angle      = this.Angle_Calculate();
        const Vx         = this.Velocity(angle) * Math.cos(this.DegreeToRadian(angle)) * 17;
        const Vy         = this.Velocity(angle) * Math.sin(this.DegreeToRadian(angle)) * 17;
        const Start_Time = Date.now();
        const g          = this._gravity;
        const yc         = this._barrel_height + this._Y_offset + (this._barrel_lenghth * Math.sin(this.DegreeToRadian(angle)));
        const BLX        = 540 - ((this._barrel_lenghth - (this._barrel_lenghth * Math.cos(this.DegreeToRadian(angle)))) * 400) - this._X_offset*260;
        const BLY        = 485 - ((this._barrel_height+this._Y_offset)*295) - (this._barrel_lenghth * Math.sin(this.DegreeToRadian(angle))) *345;

        document.getElementById("velocity_x").textContent = parseFloat(Vx/17).toFixed(2);
        document.getElementById("canvas").getContext("2d").transform(1, 0, 0,-1, BLX, BLY);

        function move(){
            if(document.getElementById('path').checked == false){
                document.getElementById("canvas").getContext("2d").clearRect(-100, -100, canvas.width, canvas.height);
            }
            let t = (Date.now() - Start_Time) / speed;
            let x = Vx * t;
            let y = Vy * t - (0.5 * g * Math.pow(t,2));
            let VY = (Vy) - (g*t);
            document.getElementById("canvas").getContext("2d").beginPath();
            document.getElementById("canvas").getContext("2d").arc(x, y, 5, 0,Math.PI * 2);
            document.getElementById("canvas").getContext("2d").fill();
            document.getElementById("velocity_y").textContent     = parseFloat(VY/17).toFixed(2);
            document.getElementById("displacement_x").textContent = parseFloat(x/289).toFixed(2);
            document.getElementById("displacement_y").textContent = parseFloat(y/300  + yc).toFixed(2);
            document.getElementById("time").textContent = ":" + parseFloat(t/12).toFixed(2) + " s";
            if (x>= 1102 - BLX)
                return;
            setTimeout(move, t / 1000000);
        }
        move();
        document.getElementById("canvas").getContext("2d").clearRect(-100, -100, canvas.width   , canvas.height);
    }
}

class display extends Warehouse{
    leave(){
        window.location.replace("homepage.html");
    }

    setting(){
        document.getElementById("setting").style.zIndex = 100000;
    }

    set(){
        this.Setup();
        document.getElementById('lct').style.top = (485 - ((this._Y_offset + this._barrel_height)*295))*0.128 + "vh";
        document.getElementById('lcb').style.top = 6.5 + (485 - ((this._Y_offset + this._barrel_height)*295))*0.128 + "vh";
        document.getElementById("setting").style.zIndex = -1000;

    }

    cancel(){
        document.getElementById("setting").style.zIndex = -1000;
    }

    side(){
        document.getElementById("canvas").style.zIndex               = 5;
        document.getElementById("lc").style.zIndex                   = 6;
        document.getElementById("top").style.zIndex                  = 0;
        document.getElementById("target").style.zIndex               = 0;
        document.getElementById("sview").style.backgroundColor       = '#FFDE59';
        document.getElementById("targetview").style.backgroundColor  = '#eee';
        document.getElementById("tview").style.backgroundColor       = '#eee';
    }

    top(){
        document.getElementById("canvas").style.zIndex               = 0;
        document.getElementById("lc").style.zIndex                   = 0;
        document.getElementById("top").style.zIndex                  = 5;
        document.getElementById("target").style.zIndex               = 0;
        document.getElementById("sview").style.backgroundColor       = '#eee';
        document.getElementById("targetview").style.backgroundColor  = '#eee';
        document.getElementById("tview").style.backgroundColor       = '#FFDE59';
    }

    target(){
        document.getElementById("canvas").style.zIndex              = 0;
        document.getElementById("lc").style.zIndex                  = 0;
        document.getElementById("top").style.zIndex                 = 0;
        document.getElementById("target").style.zIndex              = 5;
        document.getElementById("sview").style.backgroundColor      = '#eee';
        document.getElementById("targetview").style.backgroundColor = '#FFDE59';
        document.getElementById("tview").style.backgroundColor      = '#eee';
    }

}

class sidebar{
    //-----PRIVATE MEMBER ONLY-----
    target_container_1_zIndex = 4;
    rotate = 0;
    //------------------------

    //------PUBLIC MEMBER ONLY-----
    preset(){
        document.getElementById("preset_target").style.zIndex   = 10;
        document.getElementById("manual_target").style.zIndex   = 0;
        document.getElementById("preset").style.backgroundColor = '#FF5757';
        document.getElementById("manual").style.backgroundColor = '#888888';
        document.getElementById("manual").style.color           = '#B2B2B2';
        document.getElementById("preset").style.color           = '#FFDE59';
    }

    manual(){
        document.getElementById("preset_target").style.zIndex   = 0;
        document.getElementById("manual_target").style.zIndex   = 10;
        document.getElementById("manual").style.backgroundColor = '#FF5757';
        document.getElementById("preset").style.backgroundColor = '#888888';
        document.getElementById("preset").style.color           = '#B2B2B2';
        document.getElementById("manual").style.color           = '#FFDE59';
    }

    swap(){
        if(this.target_container_1_zIndex == 4){
            document.getElementById("target_container_1").style.zIndex = -1
            document.getElementById("set_1").style.zIndex              = -1
            this.target_container_1_zIndex                             = -1;
        }
        else{
            document.getElementById("target_container_1").style.zIndex = 4;
            document.getElementById("set_1").style.zIndex              = 4;
            this.target_container_1_zIndex                             = 4;
        }
    }
    spin(){
        if(this.rotate < 1){
            document.getElementById("target_container_2").style.zIndex = 1;
            document.getElementById("target_container_3").style.zIndex = 3;
            document.getElementById("target_container_4").style.zIndex = 1;
            document.getElementById("target_container_5").style.zIndex = 1;
            document.getElementById("target_container_6").style.zIndex = 1;
            document.getElementById("target_container_7").style.zIndex = 1;
            document.getElementById("set_2").style.zIndex              = 1;
            document.getElementById("set_3").style.zIndex              = 3;
            document.getElementById("set_4").style.zIndex              = 1;
            document.getElementById("set_5").style.zIndex              = 1;
            document.getElementById("set_6").style.zIndex              = 1;
            document.getElementById("set_7").style.zIndex              = 1;
            this.rotate = 1;
        }
        else if(this.rotate < 2){
            document.getElementById("target_container_2").style.zIndex = 1;
            document.getElementById("target_container_3").style.zIndex = 1;
            document.getElementById("target_container_4").style.zIndex = 3;
            document.getElementById("target_container_5").style.zIndex = 1;
            document.getElementById("target_container_6").style.zIndex = 1;
            document.getElementById("target_container_7").style.zIndex = 1;
            document.getElementById("set_2").style.zIndex              = 1;
            document.getElementById("set_3").style.zIndex              = 1;
            document.getElementById("set_4").style.zIndex              = 3;
            document.getElementById("set_5").style.zIndex              = 1;
            document.getElementById("set_6").style.zIndex              = 1;
            document.getElementById("set_7").style.zIndex              = 1;
            this.rotate = 2;
        }
        else if(this.rotate < 3){
            document.getElementById("target_container_2").style.zIndex = 1;
            document.getElementById("target_container_3").style.zIndex = 1;
            document.getElementById("target_container_4").style.zIndex = 1;
            document.getElementById("target_container_5").style.zIndex = 3;
            document.getElementById("target_container_6").style.zIndex = 1;
            document.getElementById("target_container_7").style.zIndex = 1;
            document.getElementById("set_2").style.zIndex              = 1;
            document.getElementById("set_3").style.zIndex              = 1;
            document.getElementById("set_4").style.zIndex              = 1;
            document.getElementById("set_5").style.zIndex              = 3;
            document.getElementById("set_6").style.zIndex              = 1;
            document.getElementById("set_7").style.zIndex              = 1;
            this.rotate = 3;
        }
        else if(this.rotate < 4){
            document.getElementById("target_container_2").style.zIndex = 1;
            document.getElementById("target_container_3").style.zIndex = 1;
            document.getElementById("target_container_4").style.zIndex = 1;
            document.getElementById("target_container_5").style.zIndex = 1;
            document.getElementById("target_container_6").style.zIndex = 3;
            document.getElementById("target_container_7").style.zIndex = 1;
            document.getElementById("set_2").style.zIndex              = 1;
            document.getElementById("set_3").style.zIndex              = 1;
            document.getElementById("set_4").style.zIndex              = 1;
            document.getElementById("set_5").style.zIndex              = 1;
            document.getElementById("set_6").style.zIndex              = 3;
            document.getElementById("set_7").style.zIndex              = 1;
            this.rotate = 4;
        }
        else if(this.rotate < 5){
            document.getElementById("target_container_2").style.zIndex = 1;
            document.getElementById("target_container_3").style.zIndex = 1;
            document.getElementById("target_container_4").style.zIndex = 1;
            document.getElementById("target_container_5").style.zIndex = 1;
            document.getElementById("target_container_6").style.zIndex = 1;
            document.getElementById("target_container_7").style.zIndex = 3;
            document.getElementById("set_2").style.zIndex              = 1;
            document.getElementById("set_3").style.zIndex              = 1;
            document.getElementById("set_4").style.zIndex              = 1;
            document.getElementById("set_5").style.zIndex              = 1;
            document.getElementById("set_6").style.zIndex              = 1;
            document.getElementById("set_7").style.zIndex              = 3;
            this.rotate = 5;
        }
        else{
            document.getElementById("target_container_2").style.zIndex = 3;
            document.getElementById("target_container_3").style.zIndex = 1;
            document.getElementById("target_container_4").style.zIndex = 1;
            document.getElementById("target_container_5").style.zIndex = 1;
            document.getElementById("target_container_6").style.zIndex = 1;
            document.getElementById("target_container_7").style.zIndex = 1;
            document.getElementById("set_2").style.zIndex              = 3;
            document.getElementById("set_3").style.zIndex              = 1;
            document.getElementById("set_4").style.zIndex              = 1;
            document.getElementById("set_5").style.zIndex              = 1;
            document.getElementById("set_6").style.zIndex              = 1;
            document.getElementById("set_7").style.zIndex              = 1;
            this.rotate = 0;
        }
    }
    preset_1(){
        document.getElementById("preset_1").style.backgroundColor  = '#FFDE59'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_2(){
        document.getElementById("preset_2").style.backgroundColor  = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_3(){
        document.getElementById("preset_3").style.backgroundColor  = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_4(){
        document.getElementById("preset_4").style.backgroundColor  = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_5(){
        document.getElementById("preset_5").style.backgroundColor  = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_6(){
        document.getElementById("preset_6").style.backgroundColor  = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_7(){
        document.getElementById("preset_7").style.backgroundColor  = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_8(){
        document.getElementById("preset_8").style.backgroundColor  = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_9(){
        document.getElementById("preset_9").style.backgroundColor  = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_10(){
        document.getElementById("preset_10").style.backgroundColor = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_11(){
        document.getElementById("preset_11").style.backgroundColor = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_12(){
        document.getElementById("preset_12").style.backgroundColor = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_13(){
        document.getElementById("preset_13").style.backgroundColor = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_14(){
        document.getElementById("preset_14").style.backgroundColor = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_15(){
        document.getElementById("preset_15").style.backgroundColor = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_16(){
        document.getElementById("preset_16").style.backgroundColor = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }
    
    preset_17(){
        document.getElementById("preset_17").style.backgroundColor = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_18(){
        document.getElementById("preset_18").style.backgroundColor = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_19(){
        document.getElementById("preset_19").style.backgroundColor = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_20(){
        document.getElementById("preset_20").style.backgroundColor = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_21").style.backgroundColor = '#eee'
    }

    preset_21(){
        document.getElementById("preset_21").style.backgroundColor = '#FFDE59'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_13").style.backgroundColor = '#eee'
        document.getElementById("preset_14").style.backgroundColor = '#eee'
        document.getElementById("preset_15").style.backgroundColor = '#eee'
        document.getElementById("preset_16").style.backgroundColor = '#eee'
        document.getElementById("preset_17").style.backgroundColor = '#eee'
        document.getElementById("preset_18").style.backgroundColor = '#eee'
        document.getElementById("preset_19").style.backgroundColor = '#eee'
        document.getElementById("preset_20").style.backgroundColor = '#eee'
    }

    clear(){
        document.getElementById("preset_12").style.backgroundColor = '#eee'
        document.getElementById("preset_1").style.backgroundColor  = '#eee'
        document.getElementById("preset_2").style.backgroundColor  = '#eee'
        document.getElementById("preset_3").style.backgroundColor  = '#eee'
        document.getElementById("preset_4").style.backgroundColor  = '#eee'
        document.getElementById("preset_5").style.backgroundColor  = '#eee'
        document.getElementById("preset_6").style.backgroundColor  = '#eee'
        document.getElementById("preset_7").style.backgroundColor  = '#eee'
        document.getElementById("preset_8").style.backgroundColor  = '#eee'
        document.getElementById("preset_9").style.backgroundColor  = '#eee'
        document.getElementById("preset_10").style.backgroundColor = '#eee'
        document.getElementById("preset_11").style.backgroundColor = '#eee'
    }
}

class bottombar{
    go(){
        document.getElementById("bigcirclebtn_go").style.zIndex      = -2;
        document.getElementById("bigcirclebtn_reset").style.zIndex   = 4;
        document.getElementById("status_bar_before_go").style.zIndex = -2;
        document.getElementById("status_bar_after_go").style.zIndex  = 1;
    }

    reset(){
        document.getElementById("bigcirclebtn_go").style.zIndex      = 4;
        document.getElementById("bigcirclebtn_reset").style.zIndex   = -2;
        document.getElementById("status_bar_before_go").style.zIndex = 1;
        document.getElementById("status_bar_after_go").style.zIndex  = -2;
        document.getElementById("canvas").getContext("2d").clearRect(-100, -100, canvas.width   , canvas.height);
    }

    slowbtn(){
        document.getElementById("recbtns").style.backgroundColor = '#FFDE59';
        document.getElementById("recbtnx").style.backgroundColor = '#eee';
        document.getElementById("recbtnl").style.backgroundColor = '#eee';
    }

    normbtn(){
        document.getElementById("recbtns").style.backgroundColor = '#eee';
        document.getElementById("recbtnx").style.backgroundColor = '#FFDE59';
        document.getElementById("recbtnl").style.backgroundColor = '#eee';
    }

    fastbtn(){
        document.getElementById("recbtns").style.backgroundColor = '#eee';
        document.getElementById("recbtnx").style.backgroundColor = '#eee';
        document.getElementById("recbtnl").style.backgroundColor = '#FFDE59';
    }
}

const Input = new Warehouse();
const Homebox = new homebox();
const Display = new display();
const Bottombar = new bottombar();
const Sidebar = new sidebar();
const Cal_C = new Calculation();