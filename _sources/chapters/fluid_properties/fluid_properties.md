---
jupytext:
  cell_metadata_filter: -all
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.12
    jupytext_version: 1.9.1
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Fluid Properties

## Density

The density $\rho$ of a fluid is the mass of the fluid per unit volume:

$$\rho = \frac{m}{V}.$$

Density is a point property in the sense that to get mass we have to multiply $\rho$ by some volume. If the density is spatially uniform, we have $m=\rho V$. For a differential volume element $dV$, we have $dm = \rho dV$, and the mass over some finite volume can be evaluated by integration:

```{math}
:label: eq:m_rho
m = \int_V \rho(\mathbf{x})dV.
```

<!--todo: add pictures for variable rho, and pointwise >> molecular spacing -->

In using the density this way in Eq. {eq}`eq:m_rho`, we are implicitly assuming the contiuum assumption holds. That is, all spatial variations in the density are at scales much larger that molecular sizes and spacings.

### Ideal gases
The ideal gas law is commonly written as $PV = nR_gT$. We rearrange this to $n/V = P/R_gT$, which is moles per volume. Multiplying both sides by the mean molecular weight M of the gas gives

$$\rho = \frac{MP}{R_gT}.$$

Table {numref}`tab:fluid_densities` gives densities for several fluids. Note that the difference in density between air and water is nearly a factor of one thousand. This allows important assumptions and simplifications in some calculations. This is illustrated in {numref}`fig:air_water_vol_comparison`

```{table} Densities and specific gravities of several fluids.
:name: tab:fluid_densities

| fluid                     | $\rho$ (kg/m$^3$) | $\rho$ (lbm/ft$^3$) | SG          |
|:--------------------------|:-----------------:|:-------------------:|:-----------:|
| water (20 $^o$C, 1 atm)   | 998               | 63.3                | 0.998       |
| mercury (20 $^o$C, 1 atm) | 13600             | 849                 | 13.6        |
| air (20 $^o$C, 1 atm)     | 1.204             | 0.07516             | 0.001204    |
| CO$_2$ (20 $^o$C, 1 atm)  | 1.830             | 0.1142              | 0.00183     |

```

```{figure} fig_air_water_vol_comparison.svg
---
width: 40%
name: fig:air_water_vol_comparison
---
Relative volumes of air and water for equal masses.
```

<!--todo: show how density of water and air change with temperature and pressure
-->

### Specific gravity
<a href="https://en.wikipedia.org/wiki/Relative_density" target="_blank">Specific gravity</a> is density divided by a reference density, usually water at 4 $^o$C which has a density of 1000 kg/m$^3$. That is
```{math}
:name: eq:sg
SG = \frac{\rho}{\rho_\text{H2O}}
```
Table {numref}`tab:fluid_densities` shows SG values for several common fluids.

<div>
<button class="expandable">A more extensive list of fluid densities is available here</button>
<div class="expandable_content">
<iframe src="https://en.wikipedia.org/wiki/Density#Densities" width=100% height=300px></iframe>
</div>
</div>

<!-- <span class="hoverme">Hover over me<br></span> -->
<!-- <span class="hide"> isnt this fun! </span> -->

## Viscosity
The viscosity $\mu$ of a fluid is a measure of the resistance to flow. Higher viscosity fluids have higher flow friction and are more resistant to deformation. Honey has a high viscosity compared to water. See {numref}`fig:viscosity_demo` for a simulation illustrating two fluids of different viscosities.

```{figure} Viscosities.gif
---
width: 50%
name: fig:viscosity_demo
---
Demonstration of flow of fluids with low (left) and high (right) viscosities. Attribution: "[Viscosities.gif](https://en.wikipedia.org/wiki/File:Viscosities.gif)" by [Synapticrelay](https://commons.wikimedia.org/w/index.php?title=User:Synapticrelay&action=edit&redlink=1) under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en); no changes made. 
```

Viscosity is precisely defined for a *Newtonian fluid* which obeys the relation

```{math}
:label: eq:newtons_law_of_viscosity
\tau = -\mu\frac{du}{dy}.
```

Here, $\tau$ is the shear stress, $u$ is a velocity, and $y$ is a directional coordinate. These quantities are illustrated in {numref}`fig:couette_plates`. The figure illustrates the flow between infinite parallel plates where the lower plate is fixed and the upper plate moves at some velocity $u$. This is a so-called *[Couette flow](https://en.wikipedia.org/wiki/Couette_flow)*. 

```{figure} fig_couette_plates.svg
---
width: 50%
name: fig:couette_plates
---
Illustration of steady flow between infinite parallel plates for a Newtonian fluid.
```

A linear $u(y)$ profile is established between the plates. The shear stress $\tau$ is the force per unit plate area required to maintain the flow, and Eq. {eq}`eq:newtons_law_of_viscosity` shows that $\mu$ is a proportionality constant between $\tau$ and the so-called *strain rate* $du/dy$. Eq. {eq}`eq:newtons_law_of_viscosity` can be rewritten in terms of the force on the plates as

$$
F = \tau A = -\mu A\frac{du}{dy}.
$$

We have the following:
* for a given plate area and given $\mu$, a higher plate velocity gives higher strain rate $du/dy$, requiring more force. 
* the force required is proportional to the plate area.
* the forces involved are frictional.
* $\mu$ is a proportionality constant relating $\tau$ to $du/dy$, and for given area and $du/dy$, a doubling of $\mu$ doubles the required force.

### Units

The units of $\mu$ are 
* kg/(m$\cdot$s) = Pa$\cdot$s (SI units).
* lbm/(ft$\cdot$s) (US units).
* poise (P) or centipoise (cP), with 1 P = 0.1 Pa$\cdot$s, and 1 cP = 0.001 Pa$\cdot$s

### Kinematic viscosity

The viscosity $\mu$ discussed above is called the *dynamic* viscosity. The kinematic viscosity $\nu$ is frequently used, and this is simply the dynamic viscosity divided by the density:

$$\nu = \frac{\mu}{\rho}.$$

$\nu$ has units of m$^2$/s, or ft$^2$/s.

todo: list of viscosities, or plots
todo: heat and mass transfer analogies
