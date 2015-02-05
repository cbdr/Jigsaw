(function() {

function puzzle_piece(label, color) {
	this.Container_constructor();
	
	this.color = color;
	this.label = label;
	
	this.setup();
}
var p = createjs.extend(puzzle_piece, createjs.Container);


p.setup = function() {
	var piece = this.makePiece(this.color);
	var text = new createjs.Text(this.label, "20px Arial", "#000");
	text.textBaseline = "top";
	text.textAlign = "center";

	text.x = 200/2;
	text.y = 60;
	
	this.addChild(piece, text); 
	this.on("pressmove", this.handlePressMove);
	this.on("rollover", this.handleRollOver);
	this.on("rollout", this.handleRollOver);
	this.cursor = "pointer";

	this.mouseChildren = false;
	this.count = 0;
} ;

p.handleRollOver = function(event) {       
	this.alpha = event.type == "rollover" ? 0.4 : 1;
};

p.handlePressMove = function(event) {       
	//alert("pressmove");
};

p.makePiece = function makePiece(color){
				var cont = new createjs.Container();
				var piece = new createjs.Shape();
			    piece.graphics.beginFill(color);
			    piece.graphics.moveTo(50,50)
			    .lineTo(105,50)
			    .quadraticCurveTo(125,40,105,30)
				.quadraticCurveTo(125,0,145,30)
				.quadraticCurveTo(125,40,145,50)
				.lineTo(200,50)
				.lineTo(200,80)
				.quadraticCurveTo(190,100,180,80)
				.quadraticCurveTo(150,100,180,120)
				.quadraticCurveTo(190,100,200,120)
				.lineTo(200,150)
				.lineTo(145,150)
				.quadraticCurveTo(125,140,145,130)
				.quadraticCurveTo(125,100,105,130)
				.quadraticCurveTo(125,140,105,150)
				.lineTo(50,150)
				.lineTo(50,120)
				.quadraticCurveTo(40,100,30,120)
				.quadraticCurveTo(0,100,30,80)
				.quadraticCurveTo(40,100,50,80)
				.lineTo(50,50);
				var outline = new createjs.Shape();
				outline.graphics.beginStroke('black');
				outline.graphics.moveTo(50,50)
				.lineTo(105,50)
			    .quadraticCurveTo(125,40,105,30)
				.quadraticCurveTo(125,0,145,30)
				.quadraticCurveTo(125,40,145,50)
				.lineTo(200,50)
				.lineTo(200,80)
				.quadraticCurveTo(190,100,180,80)
				.quadraticCurveTo(150,100,180,120)
				.quadraticCurveTo(190,100,200,120)
				.lineTo(200,150)
				.lineTo(145,150)
				.quadraticCurveTo(125,140,145,130)
				.quadraticCurveTo(125,100,105,130)
				.quadraticCurveTo(125,140,105,150)
				.lineTo(50,150)
				.lineTo(50,120)
				.quadraticCurveTo(40,100,30,120)
				.quadraticCurveTo(0,100,30,80)
				.quadraticCurveTo(40,100,50,80)
				.lineTo(50,50);
				cont.addChild(piece, outline);
				return cont;
			};

window.puzzle_piece = createjs.promote(puzzle_piece, "Container");
}());