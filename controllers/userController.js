const HttpStatus = require("http-status-codes");
const StatusText = require("../utils/constants");
const User = require("../models/User");

const { ERROR, FAIL, SUCCESS } = StatusText;
const { BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR } = HttpStatus;

// @desc Register users
// @ route POST /api/users/signup
// @access Public
exports.signup = async (req, res) => {
	try {
		// Create new user
		const newUser = await new User(req.body);
		console.log("req.body", req.body);
		const userCreated = await newUser.save();
		return res.status(CREATED).json({
			// The userCreated is an object
			data: userCreated,
			status: SUCCESS,
		});
	} catch (err) {
		if (err) {
			return res.status(BAD_REQUEST).json({
				message: HttpStatus.getStatusText(BAD_REQUEST),
				status: FAIL,
			});
		}
	}
};

// @desc Login users
// @ route POST /api/users/login
// @access Public
exports.signin = async (req, res) => {
	// Find user by email

	try {
		const { email, password } = req.body;
		await User.findOne({ email }, (err, userFound) => {
			if (err || !userFound) {
				return res.status(BAD_REQUEST).json({
					message: `User with this ${email} does not exist`,
				});
			}
			return res.json({ userFound });
		});
	} catch (error) {
		return res.status(INTERNAL_SERVER_ERROR).send({
			message: HttpStatus.getStatusText(INTERNAL_SERVER_ERROR),
			status: FAIL,
		});
	}
};
