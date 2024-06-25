import matplotlib.pyplot as plt

def plotting_parameters():
    # Plotting parameters
    fig = plt.figure()
    ax = fig.add_subplot(111)
    ax.margins(0.35, 0.35)

    ax.tick_params(axis='x', colors='dimgrey')
    ax.tick_params(axis='y', colors='dimgrey')
    # rem_spine = ax.spines[["top", "bottom", "left", "right"]]
    # rem_spine.set_visible(False)
    ax.grid(visible=True, alpha=0.2)
    ax.axvline(x=0, color='dimgrey', linestyle='--', linewidth='0.7')
    ax.axhline(y=0, color='dimgrey', linestyle='--', linewidth='0.7')
    return fig, ax