// ============= HAsh Table =========
console.log("============== HAsh Table::Data Structures=============")

class HashTable {
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);            
        }
        return total % this.size;
    }
    set(key, value){
        const index = this.hash(key);
        // this.table[index] = [[key, value]];
        let bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [];
            this.table[index].push([key, value]);
            // bucket = [[key, value]];
        } else {
            const sameKeyItem = bucket.filter(item => item[0] == key);
            
            if (this.table[index][i][0] === sameKeyItem[0]) {
                this.table[index][i][1] = value;
            } else {
                this.table[index].push([key, value]);
                // bucket.push([key, value])
            }   
        }
        this.size++;
    }
    get(key){
        const index = this.hash(key);
    //    return  this.table[index];
    const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] == key);
            if (sameKeyItem) {
               return sameKeyItem[1]; 
            }
        }
        return undefined;

    }
    remove(key){
        const index = this.hash(key);
        // this.table[index] = undefined;
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] == key);
            if (sameKeyItem) {
               bucket.splice(bucket.indexOf(sameKeyItem), 1) 
            } 
        }
    }
    display(){
        console.log(this.table);
        for (let i = 0; i < this.table.length; i++) {
           if(this.table[i]){
            console.log(i, this.table[i]);
           }
            
        }
    }
}

const table = new HashTable(50);
table.set('name', 'venkat')
table.set('age', '30')
table.display()

console.log(table.get('name'));
// table.remove('name')
table.set('nmae', 'venkat Reddy')
table.set('nmeadd', 'venkat1 Reddy')
table.display()