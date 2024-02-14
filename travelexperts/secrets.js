/*
 * Database credentials -- Grayson Germsheid
 *
 * This is not super necessary, but GitHub was sending me emails about uploading
 * database credentials publically, so I put it in a separate file
 * 
 * Make sure you enter username and password, port and host might be
 * different too but it works on my XAMPP MySQL (sometimes the port
 * is different)
 */
module.exports = 
{
    host: "0.0.0.0",
    user: ___YOUR_DATABASE_USERNAME___,
    pass: ___YOUR_DATABASE_PASSWORD___,
    port: 3306, // Might need to change this, XAMPP flip-flops between 3306 & 25060 sometimes
    dbname: "travelexperts"
};
