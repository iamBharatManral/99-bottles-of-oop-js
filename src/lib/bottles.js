import { downTo } from './helpers';

class Bottles {
    song(){
        return this.verses(99, 0);
    }
    verses(start, finish){
        return downTo(start, finish).map(num => this.verse(num)).join('\n');
    }
    pluralize(bottles){
        return bottles === 1 ? 'bottle' : 'bottles';
    }
    verse(noOfBottles) {
        if(noOfBottles === 0) return 'No more bottles of beer on the wall, ' +
            'no more bottles of beer.\n' +
            'Go to the store and buy some more, ' +
            '99 bottles of beer on the wall.\n';
        const firstLine = `${noOfBottles} ${this.pluralize(noOfBottles)} of beer on the wall, ` +
                                 `${noOfBottles} ${this.pluralize(noOfBottles)} of beer.\n`;
        const remainingBottles = noOfBottles - 1;
        const secondLine = remainingBottles > 0
            ? `Take one down and pass it around, ${remainingBottles} ${this.pluralize(remainingBottles)} of beer on the wall.\n`
            : 'Take it down and pass it around, no more bottles of beer on the wall.\n';
        return firstLine + secondLine;
    }
}

export {Bottles};
