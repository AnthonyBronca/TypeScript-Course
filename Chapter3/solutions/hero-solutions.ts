
interface IHero{
      realName:string;
    heroName:string;
    powers: string[];
    loveInterest: string;
    enemies: string[];
}


class Hero {
    realName:string;
    heroName:string;
    powers: string[];
    loveInterest: string;
    enemies: string[];
    private weakness: string[]
    constructor(
        realName: string,
        heroName: string,
        powers: string[],
        loveInterest : string,
        enemies: string[],
        weakness: string[]
        ){
        this.realName = realName;
        this.heroName = heroName
        this.powers = powers || [];
        this.loveInterest = loveInterest;
        this.enemies = enemies || [];
        this.weakness = weakness
    }

    getName(){
        return this.realName;
    }

    static getWeakness(hero: Hero){
        return hero.weakness
    }
}

export default Hero
