var inspectStart = false;
var outLineCpu = [];
var outLineCmdCpu = false;
var outLineRam1 = [];
var outLineCmdRam1 = false;
var startClick = false;


var homeScreen = function() {
draw = function() {


background(97, 97, 97);
fill(10, 255, 22);

textSize(28);
textAlign(CENTER,CENTER);
frameRate(60);
var sec = millis()/1000;
fill(10, 255, 22);

var colorOne = round(random(1,255));
var colorTwo = round(random(1,255));
var colorThree = round(random(1,255));
if (sec>= 0.5)
{
    colorOne = round(random(1,255));
    colorTwo = round(random(1,255));
    colorThree = round(random(1,255));
    fill(colorOne, colorTwo, colorThree);
}

text("Welcome to Motherboard Visual Inspector!", 110,-163, 200,500);
fill(60, 104, 128);
fill(colorTwo, colorOne, colorThree);
rect(108, 250,200,60,8);
fill(255, 255, 255);
textSize(32);
text("Begin",209,278);


};
};
var drawMotherBoard = function(xPos,yPos,height) {
    /* BOARD */
    fill(77, 77, 77);
    rect((xPos-(height/150*60)),yPos-(height/150*60), height/150*55, height/150*70, 10);



    /* CPU */
    fill(156, 156, 156);
    stroke(outLineCpu, outLineCpu, outLineCpu);
    rect((xPos-(height/150*40)), yPos-(height/150*40), height/150*10, height/150*10);
    fill(142, 145, 123);
    rect((xPos-(height/150*38.5)), yPos-(height/150*38.5), height/150*7, height/150*7);

/* CPU CLAMP */
    strokeWeight(3);
   stroke(138, 138, 138);
    line((xPos-(height/150*28.7)),yPos-(height/150*40.6),(xPos-(height/151*28.9)),yPos-(height/150*32.7));
    line((xPos-(height/150*29.0)),yPos-(height/150*40.9),(xPos-(height/150*38.6)),yPos-(height/150*40.9));


/* RAM SLOTS ORANGE & BLUE */
var ramStroke = 0;
    noStroke();
    strokeWeight(1);
    fill(255, 136, 0);

     if(mouseX >158 && mouseX <164 && mouseY <223 && mouseY > 102)
{

   ramStroke =0;
}
stroke(ramStroke, ramStroke, ramStroke);
    rect((xPos-(height/150*24)), yPos-(height/150*58), height/150*1.5, height/150*30);
    fill(36, 87, 255);
    rect((xPos-(height/150*20)), yPos-(height/150*58), height/150*1.5, height/150*30);
    fill(255, 136, 0);
    rect((xPos-(height/150*16)), yPos-(height/150*58), height/150*1.5, height/150*30);
    fill(36, 87, 255);
    rect((xPos-(height/150*12)), yPos-(height/150*58), height/150*1.5, height/150*30);
    if(outLineCmdRam1 === true) {
    outLineRam1 = 0;
}
else {
    outLineRam1 = false;

}
/* POWER PORTS */
fill(0, 0, 0);
rect((xPos-(height/150*8.7)), yPos-(height/150*52), height/150*2, height/150*10);


/* ATA (IDE) */
stroke(112, 112, 112);
rect((xPos-(height/150*7.4)), yPos-(height/150*41), height/150*1.5, height/150*10);


/* PERIPHERALS */
noStroke();
fill(207, 207, 207);
rect((xPos-(height/150*60)), yPos-(height/150*58), height/150*4, height/150*3);
rect((xPos-(height/150*60)), yPos-(height/150*54), height/150*5, height/150*6);
fill(64, 64, 64);
rect((xPos-(height/150*59.1)), yPos-(height/150*53), height/150*2.5, height/150*3.5);
fill(161, 143, 61);
rect((xPos-(height/150*61.3)), yPos-(height/150*54), height/150*1, height/150*6);
rect((xPos-(height/150*60)), yPos-(height/150*47), height/150*2.5, height/150*3.5);
fill(161, 143, 61);
fill(207, 207, 207);
rect((xPos-(height/150*60)), yPos-(height/150*42.7), height/150*4.5, height/150*4);
rect((xPos-(height/150*60)), yPos-(height/150*37.5), height/150*4, height/150*3);
rect((xPos-(height/150*60)), yPos-(height/150*33.4), height/150*4, height/150*3);
fill(140, 140, 140);
rect((xPos-(height/150*60)), yPos-(height/150*29.2), height/150*4.5, height/150*4);
fill(255, 149, 0);
rect((xPos-(height/150*61)), yPos-(height/150*28.6), height/150*1, height/150*1,1);
fill(3, 159, 250);
rect((xPos-(height/150*61)), yPos-(height/150*26.7), height/150*1, height/150*1,1);


/* PCI & PCI-EXPRESS */
stroke(0, 0, 0);
fill(255, 255, 255);
rect((xPos-(height/150*51)), yPos-(height/150*21), height/150*5.1, height/150*2);
fill(3, 159, 250);
rect((xPos-(height/150*51)), yPos-(height/150*17), height/150*9, height/150*2);
fill(255, 149, 0);
rect((xPos-(height/150*51)), yPos-(height/150*13), height/150*21, height/150*2);
fill(3, 159, 250);
rect((xPos-(height/150*51)), yPos-(height/150*9), height/150*9, height/150*2);
fill(255, 149, 0);
rect((xPos-(height/150*51)), yPos-(height/150*5), height/150*21, height/150*2);
fill(255, 255, 255);
rect((xPos-(height/150*51)), yPos-(height/150*1), height/150*17, height/150*2);
rect((xPos-(height/150*51)), yPos-(height/150*-3), height/150*17, height/150*2);

/* CMOS */
fill(0, 0, 0);
ellipse((xPos-(height/150*25)),yPos-(height/150*18),height/150*5,height/150*5);
fill(204, 204, 204);
ellipse((xPos-(height/150*25)),yPos-(height/150*18),height/150*4,height/150*4);

/* CHIPSET */
rect((xPos-(height/150*22)), yPos-(height/150*13), height/150*7, height/150*8);
fill(191, 173, 103);
rect((xPos-(height/150*21)), yPos-(height/150*13), height/150*5, height/150*8);

/* SATA CONNECTIONS */
noStroke();
var sataCons = function(xSPos,ySPosO,ySPosT) {
fill(41, 95, 255);
rect((xPos-(height/150*xSPos)), yPos-(height/150*ySPosO), height/150*1.5, height/150*4,2);
rect((xPos-(height/150*xSPos)), yPos-(height/150*ySPosT), height/150*1, height/150*0.8);
};
fill(0, 0, 0);
sataCons(24,0,-3.7);
sataCons(21,0,-3.7);
sataCons(18,0,-3.7);
sataCons(15,0,-3.7);

/* USB CONNECTORS */
rect((xPos-(height/150*30)), yPos-(height/150*-8), height/150*4, height/150*1);
fill(102, 102, 102);
rect((xPos-(height/150*29.5)), yPos-(height/150*-8.2), height/150*3, height/150*0.5);
fill(0, 0, 0);
rect((xPos-(height/150*23)), yPos-(height/150*-8), height/150*2, height/150*1);
rect((xPos-(height/150*20)), yPos-(height/150*-8), height/150*2, height/150*1);
rect((xPos-(height/150*17)), yPos-(height/150*-8), height/150*2, height/150*1);
rect((xPos-(height/150*14)), yPos-(height/150*-8), height/150*2, height/150*1);

/* LOCK BTN */
//rect(346,340,50,30);
//fill(255, 255, 255);
//textSize(12);
//text("LOCK",370,356);



/* RETURN HOME BUTTON */
fill(255, 0, 0);
rect(345,373,51,20,4);
fill(255, 255, 255);
textSize(12);
text("Home",370,383);
mouseClicked = function()
{
    if(mouseX >345 && mouseX < 396 && mouseY > 373 && mouseY <393)
    {
        homeScreen();
        Program.restart();

        playSound(getSound("retro/jump1"));
    }
   // if(mouseX >347 && mouseX < 396 && mouseY > 340 && mouseY <369)
    //{

  //  }

};
};

var textDisplay = function(xH,yH,xT,yT,tW,tH,head,textP,hW,hH) {
    this.xH = xH;
    this.yH = yH;
    this.xT = xT;
    this.yT = yT;
    this.tW = xT*0.66;
    this.tH = yT*10;
    this.head = head;
    this.textP = textP;
    this.hW = 110;
    this.hH = 60;
};
textDisplay.prototype.text = function() {
    textSize(18);
    fill(0, 43, 255);
    text(this.head, this.xH,this.yH);
    textSize(16);
    text(this.textP, this.xT,this.yT,this.tW,this.tH);
};
textDisplay.prototype.textLong = function() {
    textSize(18);
    fill(0, 43, 255);
    text(this.head, this.xH-40,this.yH-40,this.hW,this.hH);
    textSize(16);
    text(this.textP, this.xT,this.yT,this.tW,this.tH);
};
/* EACH TEXT OBJECT */
var cpuSocketText = new textDisplay(320,110,240,30,this.tW,this.tH,"CPU Socket:","This is the CPU of the machine which directs the computer to carry out program instructions.");
var ramSlotOne = new textDisplay(315,110,240,30,this.tW,this.tH,"Ram Slot 1:","This is one of 4 DDR DIMM memory slots where the ram is placed.");
var ramSlotTwo = new textDisplay(315,110,240,30,this.tW,this.tH,"Ram Slot 2:","This is one of 4 DDR DIMM memory slots where the ram is placed.");
var ramSlotThree = new textDisplay(315,110,240,30,this.tW,this.tH,"Ram Slot 3:","This is one of 4 DDR DIMM memory slots where the ram is placed.");
var ramSlotFour = new textDisplay(315,110,240,30,this.tW,this.tH,"Ram Slot 4:","This is one of 4 DDR DIMM memory slots where the ram is placed.");
var peripheralsInspect = new textDisplay(304,110,240,30,this.tW,this.tH,"Peripheral Connections:","These are peripheral connections including, video & audio output, usb connections,card readers, etc.",this.hW, this.hH);
var pciExOneInspect =  new textDisplay(320,110,240,30,this.tW,this.tH,"PCIe x1:","This is a PCI-Express x1 slot, used for sound or network cards.");
var pciExTwoInspect =  new textDisplay(320,110,240,30,this.tW,this.tH,"PCIe x4:","This is a PCI-Express x4 slot, used for sound, network, or network cards.");
var pciExThreeInspect =  new textDisplay(319,110,240,30,this.tW,this.tH,"PCIe x16:","This is a PCI-Express x16 slot, used primaraly for graphics cards");
var pciExFourInspect =  new textDisplay(320,110,240,30,this.tW,this.tH,"PCIe x4:","This is a PCI-Express x4 slot, used for sound, fan control, or network cards.");
var pciExFiveInspect =  new textDisplay(319,110,240,30,this.tW,this.tH,"PCIe x16:","This is a PCI-Express x16 slot, used primaraly for graphics cards");
var pciExSixInspect =  new textDisplay(319,110,240,30,this.tW,this.tH,"PCIe x8:","This is a PCI-Express x8 slot, used for sound, network, and graphics cards");
var cMosInspect =  new textDisplay(319,110,240,30,this.tW,this.tH,"CMOS:","CMOS is a battery powered chip that stores information such as date and time.");
var northBridgeInspect =  new textDisplay(305,90,240,30,this.tW,this.tH,"North Bridge Chipset:","The north bridge chipset is covered with a heatsink and connected to the CPU where its responsable for high performance tasks.");
var sataPortInspect =  new textDisplay(316,90,240,30,this.tW,this.tH,"Sata Port:","These are SATA ports for connecting hard drives, disk drives, etc.");
var usbThreeInspect =  new textDisplay(307,90,240,25,this.tW,this.tH,"IDE/ADA Connection:","This is an IDE/ATA port commonly used for USB connections.");
var ideConectInspect =  new textDisplay(307,90,240,25,this.tW,this.tH,"IDE/ADA Connection:","This is an IDE/ATA used for hard drives, usb connections.");
var twoFourPinInspect =  new textDisplay(307,90,240,25,this.tW,this.tH,"24-Pin Power Connection:","24-Pin ATX motherboard connector, main power for the board.");
var usbConnectInspect =  new textDisplay(307,90,240,25,this.tW,this.tH,"USB Connection:","This is where a USB port can be connected to the motherboard.");
var beginInspector = function(x,y,size)
{
draw = function() {
    background(227, 227, 227);
    for (var i=0; i < 40;i++)
    {
        stroke(204, 204, 204);
        line(0,i*15,400,i*15);
        line(i*15,0,i*15,400);

    }
    textSize(26);
    fill(0, 173, 144);
    text("Motherboard", 113, 20);
    fill(255, 122, 56);
    text("Visual", 112, 50);
    fill(0, 173, 144);
    text("Inspector", 115, 80);
    drawMotherBoard(x,y,size);
    fill(252, 0, 13);
    textSize(12);
    text("X-Cordinate:" +mouseX,340,22);
    text("Y-Cordinate:"+mouseY,340,38);
    /* MOUSE POINTER */

    stroke(0);
    point(mouseX, mouseY);
    line(mouseX, mouseY - 14, mouseX, mouseY - 7);
    line(mouseX, mouseY + 7, mouseX, mouseY + 14);
    line(mouseX - 14, mouseY, mouseX - 7, mouseY );
    line(mouseX + 7, mouseY, mouseX + 14, mouseY );

    /* CPU SOCKET INSPECT*/
    if(mouseX >94 && mouseX <134 && mouseY <216 && mouseY > 176)
{
    cpuSocketText.text();
    outLineCmdCpu = true;


}
else {
    outLineCmdCpu = false;
    textSize(12);
}

/* RAM INSPECT*/
   if(mouseX >158 && mouseX <164 && mouseY <223 && mouseY > 102)
{
    ramSlotOne.text();
    ramSlotOne.text();
    outLineRam1 = true;
}
else {
   outLineRam1 = false;
    textSize(12);
}
    //text("RAM Slot 1", 300,200);

if (mouseX >174 && mouseX <181 && mouseY <225 && mouseY > 104)
{
    ramSlotTwo.text();

}
if (mouseX >191 && mouseX <197 && mouseY <225 && mouseY > 104)
{
    ramSlotThree.text();

}
if (mouseX >207 && mouseX <214 && mouseY <225 && mouseY > 104)
{
    ramSlotFour.text();

}
/* PERIPHIAL INSPECT */
if (mouseX >15 && mouseX <34 && mouseY <236 && mouseY > 104)
{
    peripheralsInspect.textLong();

}
/* POWER CONNECTIONS INSPECT */
if (mouseX >15 && mouseX <34 && mouseY <236 && mouseY > 104)
{

}
/* PCI INSPECT */
if (mouseX >52 && mouseX <71 && mouseY <261 && mouseY > 252)
{
   pciExOneInspect.text();

}
if (mouseX >52 && mouseX <88 && mouseY <277 && mouseY > 261)
{
   pciExTwoInspect.text();
}
if (mouseX >52 && mouseX <135 && mouseY <293 && mouseY > 285)
{
   pciExThreeInspect.text();
}
if (mouseX >52 && mouseX <88 && mouseY <310 && mouseY > 300)
{
   pciExFourInspect.text();
}
if (mouseX >52 && mouseX <135 && mouseY <325 && mouseY > 317)
{
   pciExFiveInspect.text();
}
if (mouseX >52 && mouseX <120 && mouseY <341 && mouseY > 333)
{
   pciExSixInspect.text();
}
if (mouseX >52 && mouseX <120 && mouseY <357 && mouseY > 349)
{
   pciExSixInspect.text();
}
/* CMOS INSPECT */
if (mouseX >145 && mouseX <165 && mouseY <274 && mouseY > 253)
{
   cMosInspect.text();

}
/* NORTH BRIDGE INSPECT */
if (mouseX >168 && mouseX <195 && mouseY <317 && mouseY > 284)
{
   northBridgeInspect.textLong();
/* SATA PORTS INSPECT */
}
if (mouseX >158 && mouseX <165 && mouseY <354 && mouseY > 337)
{
   sataPortInspect.text();

}
if (mouseX >171 && mouseX <176 && mouseY <354 && mouseY > 337)
{
   sataPortInspect.text();

}
if (mouseX >183 && mouseX <188 && mouseY <354 && mouseY > 337)
{
   sataPortInspect.text();

}
if (mouseX >194 && mouseX <202 && mouseY <354 && mouseY > 337)
{
   sataPortInspect.text();

}
/* USB 3 CONNECT INSPECT */
if (mouseX >133 && mouseX <150 && mouseY <375 && mouseY > 368)
{
  usbThreeInspect.textLong();

}
if (mouseX >224 && mouseX <231 && mouseY <232 && mouseY > 172)
{
  ideConectInspect.textLong();

}
/* POWER CONNECTOR INSPECT */
if (mouseX >219 && mouseX <229 && mouseY <172 && mouseY > 129)
{
  twoFourPinInspect.textLong();

}
/* USB CONNECTION INSPECT */
if (mouseX >162 && mouseX <170 && mouseY <373 && mouseY > 368)
{
  usbConnectInspect.textLong();

}
if (mouseX >174 && mouseX <182 && mouseY <373 && mouseY > 368)
{
  usbConnectInspect.textLong();

}
if (mouseX >187 && mouseX <194 && mouseY <373 && mouseY > 368)
{
  usbConnectInspect.textLong();

}
if (mouseX >198 && mouseX <208 && mouseY <373 && mouseY > 368)
{
  usbConnectInspect.textLong();

}

var zoomIn = function() {

mouseClicked = function()
{
    if(mouseX >345 && mouseX < 396 && mouseY > 340 && mouseY <368)
    {
       beginInspector(385,340,840);


       if(mouseX >345 && mouseX < 396 && mouseY > 340 && mouseY <368)
       {
           beginInspector(255,337,600);

       }
    }
};
};

};
};


homeScreen();
var homeScreenDec = false;
if(homeScreenDec ===false)
{
//homeScreen();
}



mouseClicked = function() {
    if(mouseX > 108 && mouseX < 309 && mouseY < 338 && mouseY >250) {

        playSound(getSound("retro/laser3"));
        homeScreenDec = true;
        beginInspector(255,337,600);
        startClick = false;
 }


};


homeScreen();
