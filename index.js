function groupAnagrams(words) {
    const anagramGroups = [];

    for (const word of words) {
        // Inisialisasi variabel yang bersifat flaging
        let foundGroup = false;

        // Mencari kelompok anagram kata 
        for (const group of anagramGroups) {
            if (areAnagrams(word, group[0])) {
                group.push(word);
                foundGroup = true;
                break;
            }
        }

        // Jika kata yang dicek tidak ditemukan kelompoknya, maka buat kelompok baru
        if (!foundGroup) {
            anagramGroups.push([word]);
        }
    }

    return anagramGroups;
}

function areAnagrams(word1, word2) {
    // Membandingkan panjang kata
    if (word1.length !== word2.length) {
        return false;
    }

    // Mengurutkan karakter dalam kata
    const sortedWord1 = sortString(word1);
    const sortedWord2 = sortString(word2);

    // Membandingkan kata yang sudah diurutkan
    return sortedWord1 === sortedWord2;
}

// sorting dengan menggunakan algoritma Buble Sort
function sortString(str) {
    // Mengurutkan karakter dalam string
    const chars = str.split('');
    for (let i = 0; i < chars.length - 1; i++) {
        for (let j = i + 1; j < chars.length; j++) {
            if (chars[i] > chars[j]) {
                // Tukar karakter jika urutannya salah
                const temp = chars[i];
                chars[i] = chars[j];
                chars[j] = temp;
            }
        }
    }
    return chars.join('');
}

// TEST CASE
const words = ['cook', 'save', 'taste', 'pam', 'aves', 'vase', 'state', 'map'];
const result = groupAnagrams(words);
console.log(result);

module.exports = {groupAnagrams, areAnagrams}