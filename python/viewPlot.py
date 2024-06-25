from fileinput import filename
import pandas as pd
import matplotlib.pyplot as plt
import  tkinter as tk
from tkinter import filedialog
from plotting_functions import plotting_parameters
import mplcursors
from scipy.ndimage import gaussian_filter1d


root = tk.Tk()
root.withdraw()
filename = filedialog.askopenfilename()


if filename:
    df=pd.read_excel(filename)
    fig, ax = plotting_parameters()
    smooth_curve = gaussian_filter1d(df["Micro Amps"], 2)
    # fig=plt.figure(figsize=(18,8))
    lines1 = plt.plot(df['Volts'], smooth_curve)
    ax.set_xlabel("Volts (mV)", ha="center", fontname="Arial", fontsize=12, alpha=0.6)
    ax.set_ylabel("Current (µA)", ha="center", fontname="Arial", fontsize=12, alpha=0.6)
    ax.set_title("input potential vs time", ha="center", fontname="Arial", fontsize=17, alpha=0.8)
    mplcursors.cursor(lines1, hover=1)
    plt.show()
