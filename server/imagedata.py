# %%

import cv2
import numpy as np
import matplotlib.pyplot as plt
import sys
from mpl_toolkits.mplot3d import Axes3D

# image_BGR = np.uint8(np.random.rand(50,50,3) * 255)
# this image above is just an example. To load a real image use the line below
image_Origin = cv2.imread('test3.png')
image_RGB = cv2.cvtColor(image_Origin, cv2.COLOR_BGR2RGB)
# plt.imshow(image_RGB)
# plt.show()

# %%

r, g, b = cv2.split(image_RGB)
colors = image_RGB.reshape((image_RGB.shape[0] * image_RGB.shape[1], 3))

# %%

# %%

liColor = [[color[0], color[1], color[2]]for color in colors]  # rgb(29, 63, 61)

# %%
print(liColor)
# %%
sys.exit(0)

# %%

pixel_colors = image_RGB.reshape((np.shape(image_RGB)[0] * np.shape(image_RGB)[1], 3))
pixel_colors = pixel_colors.tolist()
# norm = colors.Normalize(vmin=-1.,vmax=1.)
# norm.autoscale(pixel_colors)
# pixel_colors = norm(pixel_colors).tolist()

# %%

import plotly.express as px
import pandas as pd

# df = px.data.iris()
df = pd.DataFrame(columns=['r', 'g', 'b'])
df['r'] = r.flatten()
df['g'] = g.flatten()
df['b'] = b.flatten()
df['color1'] = liColor
# df['color'] = colors
df.head()

# %%

from plotly import tools
from plotly.graph_objs import *  # all the types of plots that we will plot here

# plotly.offline.init_notebook_mode() # run at the start of every ipython notebook

trace1 = Scatter3d(
    x=df['r'],
    y=df['g'],
    z=df['b'],
    mode='markers',
    marker=dict(
        size=12,
        color=df['color1'],  # set color to an array/list of desired values
        colorscale='Viridis',  # choose a colorscale
        opacity=0.8
    )
)
data = [trace1]
layout = Layout(
    margin=dict(
        l=0,
        r=0,
        b=0,
        t=0
    )
)
fig = Figure(data=data, layout=layout)

# fig = px.scatter_3d(df, x='r', y='g', z='b',
#               color='color1')

fig.update_layout(showlegend=False)
fig.show()

# %%

df.head()

# %%
# %%


# %%


# %%

len(df)

# %%


