var tanya = true;
while ( tanya ) {
    // menangkap pilihan player
    var p = prompt('pilahan : gajah, semut, orang');
    
    // menangkap pilihan computer
    // membangkit kan bilangan rendom
    var comp = Math.random();
    
    if( comp < 0.34 ) {
        comp = 'gajah';
    } else if( comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }
    var hasil = '';
    // menentukan rules
    if( p == comp) {
        hasil = 'SERI!';
    } else if( p == 'gajah' ) {
        // if( comp == 'orang') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH!';
        // } 
        hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    } else if ( p == 'orang' ) {
        hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    } else if ( p == 'semut' ) {
        hasil = ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'memasukkan pilihan yang salah!';
    }
    
    // tampilkan hasilnya
    alert('kamu memilih : ' + p + ' dan  Komputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil);

    tanya = confirm('lagi?');

}

alert('terimakasih sudah bermain.')