export const ass11Mixin = {
    data(){
        return {
            textToBeReveresed: 'Text To Be Reveresed',
            computedLengthText: 'This text has computed length of -'
        }
    },
    computed : {
        reversedText(){
            return this.textToBeReveresed.split('').reverse().join('');
        },
        computedLength(){
            return this.computedLengthText + " (" + this.computedLengthText.length + ")";
        }
    }
}