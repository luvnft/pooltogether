import { Vault } from '@pooltogether/hyperstructure-client-js'
import { useUserVaultTokenBalance } from '@pooltogether/hyperstructure-react-hooks'
import { TokenValueAndAmount } from '@shared/react-components'
import { Spinner } from '@shared/ui'
import { Address } from 'viem'
import { useAccount } from 'wagmi'

interface AccountVaultBalanceProps {
  vault: Vault
  address?: Address
  className?: string
}

export const AccountVaultBalance = (props: AccountVaultBalanceProps) => {
  const { vault, address, className } = props

  const { address: _userAddress } = useAccount()
  const userAddress = address ?? _userAddress

  const { data: tokenBalance, isFetched: isFetchedTokenBalance } = useUserVaultTokenBalance(
    vault,
    userAddress as Address
  )

  if (!userAddress) {
    return <>-</>
  }

  if (!isFetchedTokenBalance) {
    return <Spinner />
  }

  if (tokenBalance === undefined) {
    return <>?</>
  }

  if (tokenBalance.amount > 0n) {
    return (
      <TokenValueAndAmount
        token={tokenBalance}
        className={className}
        valueClassName='text-sm md:text-base'
        amountClassName='text-xs md:text-sm'
        valueOptions={{ hideZeroes: true }}
      />
    )
  }

  return <>-</>
}
