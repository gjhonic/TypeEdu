class Square {
    private lenght: number = undefined;
    private width: number = undefined;

    public setLenght(a: number){
        if(a < 0){
            console.log("Длина должна быть больше 0");
            return false;
        }else{
            this.lenght = a;
            return true;
        }
    }

    public setWidth(b: number){
        if(b < 0){
            console.log("Ширина должна быть больше 0");
            return false;
        }else{
            this.width = b;
            return true;
        }
    }

    public getLenght(): number{
        return this.lenght;
    }

    public getWidth(): number{
        return this.width;
    }

    public getS(): number{
        return this.width*this.lenght;
    }

    public constructor(){
        this.width = undefined;
        this.lenght = undefined;
    }
}