import sys

class LoggerWriter:
    def __init__(self, log_file):
        self.terminal = sys.__stdout__
        self.log_file = log_file

    def write(self, message):
        self.terminal.write(message)
        self.log_file.write(message)
        self.flush()

    def flush(self):
        self.terminal.flush()
        self.log_file.flush()
