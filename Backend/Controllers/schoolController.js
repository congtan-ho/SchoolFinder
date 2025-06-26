import pool from "../config/db.js";

// get all school
export const getAllSchools = async (req, res) => {
    try {
        const schools = await pool.query("SELECT * FROM schools");
        console.log("Fetched schools", schools);
        res.status(200).json({seccess: true, data: schools.rows});
    } catch (err) {
        console.log("Error get schools", err);
        res.status(500).json({success: false, message: "Internal server error"});
    } 
}
// get school (id)
export const getSchool = async (req, res) => {
    const {id} = req.params;
    try {
        
        const school = await pool.query("SELECT * FROM schools WHERE id=$1", [id]);
        res.status(200).json({success: true, data: school.rows});
    } catch (err) {
        console.log("Error in getSchool", err);
        res.status(500).json({success: false, message: "Internal server error"});
    } 
};
//update school
export const updateSchool = async (req, res) => {
    const {id} = req.params;
    const {name, code, type, location, address, website, ranking, logo_url, is_public} = req.body;
    try {
        
        const updateSchool = await pool.query("UPDATE schools SET name=$1, code=$2, type=$3, location=$4, website=$5, ranking=$6, logo_url=$7, is_public=$8 RETURNING * ", [name, code, type, location, address, website, ranking, logo_url, is_public]);
        if (updateSchool.length === 0) {
            return res.status(404).json({
                success: false,
                message: "School not found"
            });
        }
        res.status(200).json({ success: true, data: updateSchool.rows});
    } catch (err) {
        console.log("Error in updateSchool", err);
        res.status(500).json({success: false, message: "Internal server error"});
    }
};
// deleteSchool
export const deleteSchool = async (req, res) => {
    const {id} = req.params;
    try {
        const deleteSchool = await pool.query("DELETE FROM schools WHERE id=$1 RETURNING *", [id]);
        if (deleteSchool.length === 0) {
            return res.status(404).json({
                success: false,
                message: "School not found"
            });
        }
        res.status(200).json({success: true, data: deleteSchool});
    } catch (err) {
        console.log("Error in deleteSchool", err);
        res.status(500).json({success: false, message: "Internal server error"});
    } 
};
// createSchool
export const createSchool = async (req, res) => {
    const {name, code, type, location, address, website, ranking, logo_url, is_public} = req.body;
    if(!name || !code || !type || !location || !address || !website || !ranking || !logo_url || !is_public) {
        return res.status(400).json({success: false, message:"All fields are required"});
    }
    try {
           const newSchool = await pool.query("INSERT INTO schools (name, code, type, location, address, website, ranking, logo_url, is_public) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", [name, code, type, location, address, website, ranking, logo_url, is_public]);
           console.log("New school added: ", newSchool);
           res.status(201).json({success: true, data: newSchool.rows});
        } catch (err) {
            console.log("Error create school", err);
            res.status(500).json({success: false, message: "Internal server error"});
        }
};