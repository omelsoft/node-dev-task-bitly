import winston from 'winston';
import fs from 'fs';
import path from 'path';

const { splat, combine, timestamp, printf } = winston.format;

const logDir = 'tmp';

// Create the tmp directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}


// define the custom settings for each transport (file, console)
const options = {
  file: {
    level: 'info',
    filename: path.join(logDir, 'requests.log'),
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// instantiate a new Winston Logger with the settings defined above
let logger;
logger = winston.createLogger({

  // Format the texts to be printed out into the log file
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    splat(),
    printf(info => `${info.timestamp} - ${info.message}`)
  ),
   transports: [
      new winston.transports.File(options.file)
   ],
   exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write(message) {
    logger.info(message);
  },
};

export default logger;