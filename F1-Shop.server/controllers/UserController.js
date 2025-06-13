import { findOne, create, find } from '../models/User';
import { sign } from 'jsonwebtoken';

const generateToken = (id) => {
    return sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

export async function registerUser(req, res) {
    const {name, email, password} = req.body;
    const exists = await findOne({ email });
    if (exists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const user = await create({name, email, password});
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
    });
}

export async function loginUser(req, res) {
    const {email, password} = req.body;
    const user = await findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
}

export async function getUsers(req, res) {
    const users = await find({});
    res.json(users);
}