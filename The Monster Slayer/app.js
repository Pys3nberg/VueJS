new Vue({
   el: "#app",
   data: {
       playerHealth: 100,
       monsterHealth: 100,
       gameIsRunning: false,
       log: []
   },
    methods: {
       startGame: function(){
           this.gameIsRunning = true;
           this.playerHealth = 100;
           this.monsterHealth = 100;
           this.log = [];
       },
        attack: function(){

           var damage = this.calculateDamage(3, 10);
           this.monsterHealth -= damage;
           this.log.unshift({
              isPlayer: true,
              text: 'Player hits Monster ' + damage
           });
           if(this.checkWin())
           {
               return;
           }
           this.monsterAttacks();

        },
        specialAttack: function(){
           var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.log.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard ' + damage
            });
            if(this.checkWin())
            {
                return;
            }
            this.monsterAttacks();
        },
        heal: function(){
           if(this.playerHealth <= 90){
               this.playerHealth += 10;
               this.log.unshift({
                   isPlayer: true,
                   text: 'Player heals ' + 10
               });
               this.monsterAttacks();
           }else{
               this.playerHealth = 100;
               this.monsterAttacks();
           }

        },
        giveUp: function(){
            this.gameIsRunning = false;
        },
        calculateDamage: function(min, max){
            return Math.max(Math.ceil(Math.random() * max), min);
        },
        checkWin: function () {
            if(this.monsterHealth <= 0){
                if(confirm('You won! New Game?')) {
                    this.startGame();
                }else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0){
                if(confirm('You Lost! New Game?')) {
                    this.startGame();
                }else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        monsterAttacks: function(){
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage
            this.log.unshift({
                isPlayer: false,
                text: 'Monster hits Player ' + damage
            });
            if(this.checkWin())
            {
                return;
            }
        }
    }
});