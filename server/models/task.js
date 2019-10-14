const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
title: {type: String},
description: {type: String, default: ""},
completed: {type: Boolean, default: false},
// created_at: {type: Date, default: Date.now},
// updated_at: {type: Date, default: Date.now},
}, {timestamps: true})
mongoose.model("Task", TaskSchema)